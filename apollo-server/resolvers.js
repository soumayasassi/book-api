const axios = require("axios");

const BASE_URL = "https://odyssey-lift-off-rest-api.herokuapp.com";

const resolvers = {
  Query: {
    tracksForHome: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tracks`);
        return response.data;
      } catch (error) {
        console.error("Error fetching tracks:", error);
        throw new Error("Failed to fetch tracks");
      }
    },
    track: async (_, { id }) => {
      try {
        const response = await axios.get(`${BASE_URL}/track/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching track with ID ${id}:`, error);
        throw new Error("Failed to fetch track");
      }
    },
  },
};

module.exports = resolvers;

const axios = require("axios");

const BASE_URL = "https://book-api-j51z.onrender.com";

const resolvers = {
  Query: {
    booksForHome: async () => {
      try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
      } catch (error) {
        console.error("Error fetching tracks:", error);
        throw new Error("Failed to fetch books");
      }
    },
    book: async (_, { id }) => {
      try {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error);
        throw new Error("Failed to fetch book");
      }
    },
  },
};

module.exports = resolvers;

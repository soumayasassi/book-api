// resolvers.js
module.exports = {
  Query: {
    allBooks: async (_, __, { dataSources }) => {
      return dataSources.bookAPI.getAllBooks();
    },

  }

};

// resolvers.js
module.exports = {
  Query: {
    book: async (_, { _id }, { dataSources }) => {
      return dataSources.bookAPI.getBookById(_id);
    },
    allBooks: async (_, __, { dataSources }) => {
      return dataSources.bookAPI.getAllBooks();
    },
  },
  Mutation: {
    createBook: async (_, { input }, { dataSources }) => {
      return dataSources.bookAPI.createBook(input);
    },
    updateBook: async (_, { _id, input }, { dataSources }) => {
      return dataSources.bookAPI.updateBook(_id, input);
    },
    deleteBook: async (_, { _id }, { dataSources }) => {
      await dataSources.bookAPI.deleteBook(_id);
      return "Book with id"+_id+" deleted successfully.";
    },
  },
};

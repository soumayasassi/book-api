// resolvers.js
module.exports = {
  Book: {
    id: (parent) => parent._id.toString(),
  },
  Query: {
    book: async (_, { id }, { dataSources }) => {
      return dataSources.bookAPI.getBookById(id);
    },
    allBooks: async (_, __, { dataSources }) => {
      return dataSources.bookAPI.getAllBooks();
    },
  },
  Mutation: {
    createBook: async (_, { input }, { dataSources }) => {
      return dataSources.bookAPI.createBook(input);
    },
    updateBook: async (_, { id, input }, { dataSources }) => {
      return dataSources.bookAPI.updateBook(id, input);
    },
    deleteBook: async (_, { id }, { dataSources }) => {
      await dataSources.bookAPI.deleteBook(id);
      return "Book with id"+id+" deleted successfully.";
    },
  },
};

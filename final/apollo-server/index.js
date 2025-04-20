const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const BookAPI = require('./datasources/book-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        bookAPI: new BookAPI(),
    }),
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

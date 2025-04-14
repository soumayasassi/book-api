const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int
  }


  type Query {
    tracksForHome: [Book]!
    book(id: ID!): Book
  }
`;

module.exports = typeDefs;

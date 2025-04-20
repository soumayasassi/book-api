const { gql } = require('apollo-server');

// Define your GraphQL schema using SDL
const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    year: Int!
  }

  input BookInput {
    title: String!
    author: String!
    year: Int
  }

  type Query {
    allBooks: [Book]
    book(_id: ID!): Book
  }
  
  type Mutation {
    createBook(input: BookInput!): Book
    updateBook(id: ID!, input: BookInput!): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = typeDefs;

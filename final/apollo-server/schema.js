const { gql } = require('apollo-server');

// Define your GraphQL schema using SDL
const typeDefs = gql`
  type Book {
    id: ID!
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
    book(id: ID!): Book
  }
  
  type Mutation {
    createBook(input: BookInput!): Book
    updateBook(id: ID!, input: BookInput!): Book
    deleteBook(id: ID!): String
  }
`;

module.exports = typeDefs;

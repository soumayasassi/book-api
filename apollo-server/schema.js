const { gql } = require("apollo-server");

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    tracksForHome: [Track]!
    track(id: ID!): Track
  }
`;

module.exports = typeDefs;

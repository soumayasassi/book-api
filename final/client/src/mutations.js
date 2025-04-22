import { gql } from '@apollo/client';

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
  deleteBook(id: $id)
}
`;


export const ADD_BOOK = gql`
  
mutation CreateBook($input: BookInput!) {
  createBook(input: $input) {
    title
    author
    year
  }
}
`;

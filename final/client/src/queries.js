 
import { gql } from "@apollo/client";

// Requête pour obtenir tous les livres
export const GET_BOOKS = gql`
    query {
        allBooks {
            id
            title
            author
            year
        }
    }
`;


import { gql } from '@apollo/client';

export const BOOK_QUERY = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      name
      cover
      description
      isFavorite
      author {
        name
      }
    }
  }
`;

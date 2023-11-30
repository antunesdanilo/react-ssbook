import { gql } from '@apollo/client';

export const BOOKS_ALL_QUERY = gql`
  query AllBooks {
    allBooks {
      id
      name
      cover
      author {
        name
      }
      category
    }
  }
`;

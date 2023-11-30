import { gql } from '@apollo/client';

export const BOOKS_FAVORITE_QUERY = gql`
  query FavoriteBooks {
    favoriteBooks {
      id
      name
      cover
      author {
        name
      }
    }
  }
`;

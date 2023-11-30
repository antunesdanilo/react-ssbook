import { gql } from '@apollo/client';

export const AUTHORS_FAVORITE_QUERY = gql`
  query FavoriteAuthors {
    favoriteAuthors {
      id
      name
      picture
      booksCount
    }
  }
`;

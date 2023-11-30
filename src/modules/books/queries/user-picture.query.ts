import { gql } from '@apollo/client';

export const USER_PICTURE_QUERY = gql`
  query UserPicture {
    userPicture
  }
`;

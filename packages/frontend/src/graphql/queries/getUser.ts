import { gql } from "@apollo/client";

export const GET_USER_STR = `
  query GetUser($email: String) {
    user(email: $email) {
      user_id
      username
      broker_id
    }
  }
`;

export const GET_USER = gql`
  ${GET_USER_STR}
`;

import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      message
      user {
        id
        name
        email
        role
        image
      }
    }
  }
`;
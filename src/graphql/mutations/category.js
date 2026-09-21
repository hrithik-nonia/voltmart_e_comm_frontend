import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!, $description: String, $isActive: Boolean!) {
    createCategory(
      input: {
        name: $name
        description: $description
        isActive: $isActive
      }
    ) {
      message
    }
  }
`;
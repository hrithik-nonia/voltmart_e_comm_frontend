import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    getCategory {
      id
      name
      slug
      description
      icon
    }
  }
`;


export const GET_CATEGORY_FOR_ADMIN = gql`
  query GetAdminCategory($status: String){
    getAdminCategory (status: $status) {
      id
      name
      slug
      description
      icon
      totalProducts
      status
    }
  }
`;
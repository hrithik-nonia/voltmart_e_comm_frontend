import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($page: Int, $limit: Int, $categoryId: String) {
    products(page: $page, limit: $limit, categoryId: $categoryId) {
      data {
        id
        productName
        price
        salePrice
        category
        image
        description
      }
      pagination {
        page
        totalPages
        hasNext
        hasPrev
        total
      }
    }
  }
`;
import { gql } from "@apollo/client";

export const GET_CART_DATA = gql`
  query GetCartData {
    getCartData {
      cartId
      productId
      image
      productName
      inStock
      description
      salePrice
      price
      quantity
    }
  }
`;
import { gql } from "@apollo/client";


export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      id
      productName
      image
      price
    }
  }
`;

export const CREATE_CART_DATA = gql`
  mutation CreateCartData($productId: String!, $quantity: Int) {
    createCartData(productId: $productId, quantity: $quantity) {
      message
    }
  }
`;

export const DELETE_CART_DATA = gql`
  mutation DeleteCartData($productId: String!) {
    deleteCartData(productId: $productId) {
      message
    }
  }
`;
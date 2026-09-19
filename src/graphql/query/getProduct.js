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
        hasNext
        total
      }
    }
  }
`;


export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: String!) {
    getProductById(productId: $productId) {
      data {
        id
        productName
        price
        stock
        description
        salePrice
        image
      }
      specs {
        brand
        color
        warranty
      }
    }
  }
`;

export const GET_CHECKOUT_PRODUCT = gql`
  query GetCheckOutProduct($productId: String!, $quantity: Int!) {
    getOrderProduct(productId: $productId, quantity: $quantity) {
      id
      name
      image
      price
      quantity
      totalPrice
    }
  }
`;


export const GET_ADMIN_PRODUCTS = gql`
  query GetAdminProducts($page: Int!, $limit: Int!, $categoryId: String) {
    getAdminProducts(
      page: $page
      limit: $limit
      categoryId: $categoryId
    ) {
      products {
        id
        image
        productName
        sku
        createdAt
        price
        stock
        isActive
        specs {
          brand
          color
          warranty
        }
      }
      pagination {
        page
        limit
        total
        hasNext
      }
    }
  }
`;
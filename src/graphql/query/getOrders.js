import { gql } from "@apollo/client";

export const GET_MY_ORDERS = gql`
  query GetMyOrders($status: OrderStatus) {
    getOrders(status: $status) {
      id
      orderNumber
      productImage
      productName
      quantity
      total
      paymentStatus
      deliveryStatus
      createdAt
    }
  }
`;
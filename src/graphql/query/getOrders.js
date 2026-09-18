import { gql } from "@apollo/client";

export const GET_MY_ORDERS = gql`
  query GetMyOrders($status: OrderStatus) {
    getOrders(status: $status) {
      id
      productId
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


export const GET_ORDER_BY_ID = gql`
  query GetOrderById($orderId: String!) {
    getOrderById(orderId: $orderId) {
      id
      orderNumber
      productImage
      productName
      quantity
      total
      paymentStatus
      deliveryStatus
      createdAt

      address {
        fullName
        phoneNum
        streetAddress
        city
        state
        pinCode
      }

      amounts {
        subtotal
        discount
        shipping
      }
    }
  }
`;
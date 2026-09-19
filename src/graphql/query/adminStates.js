import { gql } from "@apollo/client"

// Dashboard page load pe
export const GET_DASHBOARD_STATS = gql`
  query GetDashboardStats {
    getDashboardStats {
      totalRevenue
      totalFulfillment
      totalOrders 
      totalProducts
      totalCustomers
    }
  }
`;

// Inventory page
export const GET_INVENTORY_STATS = gql`
  query GetInventoryStats {
    getInventoryStats {
      totalProducts
      activeProducts
      lowStock
      outOfStock
    }
  }
`;

// Customers page
export const GET_CUSTOMER_STATS = gql`
  query GetCustomerStats {
    getCustomerStats {
      totalCustomers
      activeUsers
      adminUsers
      inactiveUsers
    }
  }
`;
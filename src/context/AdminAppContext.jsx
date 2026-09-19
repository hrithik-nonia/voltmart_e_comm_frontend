import { createContext, useContext } from "react";
import { useQuery } from "@apollo/client/react";
import {
  GET_DASHBOARD_STATS,
  GET_INVENTORY_STATS,
  GET_CUSTOMER_STATS,
} from "../graphql/query/adminStates";

const AdminAppContext = createContext();

export const AdminAppProvider = ({ children }) => {
  const {
    data: dashboardData,
    loading: dashboardLoading,
    error: dashboardError,
    refetch: refetchDashboard,
  } = useQuery(GET_DASHBOARD_STATS);

  const {
    data: inventoryData,
    loading: inventoryLoading,
    error: inventoryError,
    refetch: refetchInventory,
  } = useQuery(GET_INVENTORY_STATS);

  const {
    data: customerData,
    loading: customerLoading,
    error: customerError,
    refetch: refetchCustomer,
  } = useQuery(GET_CUSTOMER_STATS);

  // Saare stats ek saath refresh karo
  const refetchAllStats = () => {
    refetchDashboard();
    refetchInventory();
    refetchCustomer();
  };

  const value = {
    dashboardStats: dashboardData?.getDashboardStats,
    dashboardLoading,
    dashboardError,
    refetchDashboard,

    inventoryStats: inventoryData?.getInventoryStats,
    inventoryLoading,
    inventoryError,
    refetchInventory,

    customerStats: customerData?.getCustomerStats,
    customerLoading,
    customerError,
    refetchCustomer,

    refetchAllStats, // ← sab ek saath — emergency ke liye
  };

  return (
    <AdminAppContext.Provider value={value}>
      {children}
    </AdminAppContext.Provider>
  );
};

// eslint-disable-next-line
export const useAdminAppContext = () => useContext(AdminAppContext);

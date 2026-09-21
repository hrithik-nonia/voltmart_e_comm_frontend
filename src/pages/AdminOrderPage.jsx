// built in imports
import { ShoppingCart, Workflow, Waypoints, Truck } from "lucide-react";

// custom imports
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import OrderDashboard from "../components/adminOrdersPageComp/OrderDashboard";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import { useAdminAppContext } from "../context/AdminAppContext";
import { GET_ORDERS_INFO_FOR_ADMIN } from "../graphql/query/getOrders";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
import { exportOrdersCSV } from "../api/getApis";
import { useMessage } from "../context/MessageContext";

function AdminOrderPage() {
  const { dashboardLoading, dashboardError, dashboardStats } =
    useAdminAppContext();

  // get error message setter from context
  const { showError } = useMessage();

  // set page, set limit, set days
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [days, setDays] = useState(1);
  const [filterStatus, setFilterStatus] = useState(null);

  // get orders data info for admin
  const {
    data: orderData,
    loading: orderLoading,
    error: orderError,
  } = useQuery(GET_ORDERS_INFO_FOR_ADMIN, {
    variables: {
      page: page,
      limit: limit,
      days: days,
      fulfillmentStatus: filterStatus,
    },
  });

  // handle click export order csv
  const handleExportOrderCSV = async (days) => {
    try {
      await exportOrdersCSV(days);
    } catch (error) {
      showError(error?.message);
    }
  };

  // Order Card Data
  const ordersCaraData = [
    {
      label: "TOTAL ORDERS",
      value: dashboardStats?.totalOrders,
      icon: ShoppingCart,
      iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
    },
    {
      label: "TOTAL FULFILLMENT",
      value: dashboardStats?.totalFulfillment,
      icon: Workflow,
      iconStyle: "bg-[#0E1A30] border-blue-800/50 text-blue-400",
    },
    {
      label: "TOTAL PRODUCTS",
      value: dashboardStats?.totalProducts,
      icon: Truck,
      iconStyle: "bg-[#1E1416] border-amber-900/50 text-amber-500",
    },
    {
      label: "CLIENTS",
      value: dashboardStats?.totalCustomers,
      icon: Waypoints,
      iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
    },
  ];

  // filter options
  const filterOptions = [
    { label: "All Categories", value: null },
    { label: "Pending", value: "pending" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
  ];

  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Orders"
            text="Monitor and manage customer orders, routing telemetry, and regional
            fulfillment velocity across global distribution clusters."
            setDaysFilterForTableData={setDays}
            handleExport={handleExportOrderCSV}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Status Card Component Fatta!</div>}>
          <MissionControlKPICards
            cards={ordersCaraData}
            loading={dashboardLoading}
            error={dashboardError}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Filter Bar Component Fatta!</div>}>
          <InventoryFilterBar
            setCategory={setFilterStatus}
            data={filterOptions}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Order Dashboard Component Fatta!</div>}>
          <OrderDashboard
            data={orderData?.getOrdersInfoForAdmin || []}
            loading={orderLoading}
            error={orderError}
            setPage={setPage}
            setLimit={setLimit}
          />
        </ErrorBoundary>
      </section>
    </>
  );
}
export default AdminOrderPage;

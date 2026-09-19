// built in imports
import { ShoppingCart, Workflow, Waypoints, Truck } from "lucide-react";

// custom imports
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import OrderDashboard from "../components/adminOrdersPageComp/OrderDashboard";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import { useAdminAppContext } from "../context/AdminAppContext";

function AdminOrderPage() {
  const { dashboardLoading, dashboardError, dashboardStats } =
    useAdminAppContext();

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

  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Orders"
            text="Monitor and manage customer orders, routing telemetry, and regional
            fulfillment velocity across global distribution clusters."
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
          <InventoryFilterBar />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Order Dashboard Component Fatta!</div>}>
          <OrderDashboard />
        </ErrorBoundary>
      </section>
    </>
  );
}
export default AdminOrderPage;

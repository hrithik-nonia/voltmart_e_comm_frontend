// built in imports
import { ShoppingCart, Workflow, Waypoints, Truck } from "lucide-react";

// custom imports
import OrdersHeader from "../components/adminOrdersPageComp/OrdersHeader";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import OrderDashboard from "../components/adminOrdersPageComp/OrderDashboard";

const kpiData = [
  {
    id: "revenue",
    label: "total volume",
    value: "82,000",
    icon: ShoppingCart,
    iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
  },
  {
    id: "fulfillment",
    label: "TOTAL FULFILLMENT",
    value: "1,284",
    icon: Workflow,
    iconStyle: "bg-[#0E1A30] border-blue-800/50 text-blue-400",
  },
  {
    id: "hardware",
    label: "HARDWARE MATRIX SKUS",
    value: "342",
    icon: Truck,
    iconStyle: "bg-[#1E1416] border-amber-900/50 text-amber-500",
  },
  {
    id: "clients",
    label: "QUANTUM CLIENTS",
    value: "5,621",
    icon: Waypoints,
    iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
  },
];

function AdminOrderPage() {
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <OrdersHeader />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Status Card Component Fatta!</div>}>
          <MissionControlKPICards cards={kpiData} />
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

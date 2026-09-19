// built in imports
import { Banknote, Truck, Cpu, Share2 } from "lucide-react";

// custom imports
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import RecentOrdersTable from "../components/adminDashboardComponents/RecentOrdersTable";
import TopPerformingSKUs from "../components/adminDashboardComponents/TopPerformingSKUs";
import VoltMartEdgeGrid from "../components/adminDashboardComponents/VoltMartEdgeGrid";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import { useAdminAppContext } from "../context/AdminAppContext";

function AdminDashBoard() {
  const { dashboardStats, dashboardLoading, dashboardError } =
    useAdminAppContext();

  // Dash board card data
  const cards = [
    {
      label: "GROSS REVENUE",
      value: `₹ ${dashboardStats?.totalRevenue}`,
      icon: Banknote,
      iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
    },
    {
      label: "TOTAL FULFILLMENT",
      value: dashboardStats?.totalFulfillment,
      icon: Truck,
      iconStyle: "bg-[#0E1A30] border-blue-800/50 text-blue-400",
    },
    {
      label: "TOTAL PRODUCTS",
      value: dashboardStats?.totalProducts,
      icon: Cpu,
      iconStyle: "bg-[#1E1416] border-amber-900/50 text-amber-500",
    },
    {
      label: "CLIENTS",
      value: dashboardStats?.totalCustomers,
      icon: Share2,
      iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
    },
  ];

  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Mission Control & Velocity"
            text="Real-time sales velocity, hardware fulfillment pipelines, and
            quantum telemetry node acquisition metrics."
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Status Card Component Fatta!</div>}>
          <MissionControlKPICards
            cards={cards}
            loading={dashboardLoading}
            error={dashboardError}
          />
        </ErrorBoundary>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <div className="lg:col-span-4">
            <ErrorBoundary
              fallback={<div>Tracking Table Component Fatta!</div>}
            >
              <RecentOrdersTable />
            </ErrorBoundary>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <ErrorBoundary
              fallback={<div>Top Performing sku Component Fatta!</div>}
            >
              <TopPerformingSKUs />
            </ErrorBoundary>
            <ErrorBoundary
              fallback={<div>Server Speed Tracker Component Fatta!</div>}
            >
              <VoltMartEdgeGrid />
            </ErrorBoundary>
          </div>
        </div>
      </section>
    </>
  );
}
export default AdminDashBoard;

// built in imports

// custom imports
import MissionControlHeader from "../components/adminDashboardComponents/MissionControlHeader";
import MissionControlKPICards from "../components/adminDashboardComponents/MissionControlKPICards";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import RecentOrdersTable from "../components/adminDashboardComponents/RecentOrdersTable";
import TopPerformingSKUs from "../components/adminDashboardComponents/TopPerformingSKUs";
import VoltMartEdgeGrid from "../components/adminDashboardComponents/VoltMartEdgeGrid";

function AdminDashBoard() {
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <MissionControlHeader />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Status Card Component Fatta!</div>}>
          <MissionControlKPICards />
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

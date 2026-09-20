// built in imports
import { Banknote, Truck, Cpu, Share2 } from "lucide-react";

// custom imports
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import RecentOrdersTable from "../components/adminDashboardComponents/RecentOrdersTable";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import { useAdminAppContext } from "../context/AdminAppContext";
import { exportOrdersCSV } from "../api/getApis";
import { useMessage } from "../context/MessageContext";
import { GET_ORDERS_INFO_FOR_ADMIN } from "../graphql/query/getOrders";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";

function AdminDashBoard() {
  // get error messsage setter from context
  const { showError } = useMessage();
  const { dashboardStats, dashboardLoading, dashboardError } =
    useAdminAppContext();

  // set page, set limit, set days
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [days, setDays] = useState(1);

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
    },
  });

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

  // handle click export order csv
  const handleExportOrderCSV = async (days) => {
    try {
      await exportOrdersCSV(days);
    } catch (error) {
      showError(error?.message);
    }
  };

  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Mission Control & Velocity"
            text="Real-time sales velocity, hardware fulfillment pipelines, and
            quantum telemetry node acquisition metrics."
            handleExport={handleExportOrderCSV}
            setDaysFilterForTableData={setDays}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Status Card Component Fatta!</div>}>
          <MissionControlKPICards
            cards={cards}
            loading={dashboardLoading}
            error={dashboardError}
          />
        </ErrorBoundary>

        <div>
          <div>
            <ErrorBoundary
              fallback={<div>Tracking Table Component Fatta!</div>}
            >
              <RecentOrdersTable
                data={orderData?.getOrdersInfoForAdmin || []}
                loading={orderLoading}
                error={orderError}
                setPage={setPage}
                setLimit={setLimit}
                limit={limit}
              />
            </ErrorBoundary>
          </div>
        </div>
      </section>
    </>
  );
}
export default AdminDashBoard;

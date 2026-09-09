// built in imports
import { Share2, Radio, BadgeCheck, TriangleAlert } from "lucide-react";

// custom imports
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";

const customerCardData = [
  {
    id: "revenue",
    label: "TOTAL ACCOUNTS",
    value: "40",
    icon: Share2,
    iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
  },
  {
    id: "fulfillment",
    label: "ACTIVE NODES",
    value: "140",
    icon: Radio,
    iconStyle: "bg-[#0E1A30] border-blue-800/50 text-blue-400",
  },
  {
    id: "hardware",
    label: "ENTERPRISE TIER",
    value: "342",
    icon: BadgeCheck,
    iconStyle: "bg-[#1E1416] border-amber-900/50 text-amber-500",
  },
  {
    id: "clients",
    label: "DORMENT/REVIEW",
    value: "5,621",
    icon: TriangleAlert,
    iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
  },
];

function AdminCustomersPage() {
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Customer"
            text="Customer account overview, node identities, and account telemetry across regional commerce clusters."
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Card Component Fatta!</div>}>
          <MissionControlKPICards cards={customerCardData} />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Filter Bar Component Fatta!</div>}>
          <InventoryFilterBar />
        </ErrorBoundary>
      </section>
    </>
  );
}
export default AdminCustomersPage;

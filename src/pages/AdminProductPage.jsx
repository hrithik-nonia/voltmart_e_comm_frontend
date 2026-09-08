// built in imports
import {
  LayoutGrid,
  CheckCircle2,
  AlertTriangle,
  MinusCircle,
} from "lucide-react";

// custom imports
import ProductsHeader from "../components/adminProductPageComp/ProductsHeader";
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import StandaloneHardwareTable from "../components/adminProductPageComp/StandaloneHardwareTable";

function AdminProductPage({
  totalSkus = "1,428",
  activeInStock = "1,392",
  lowStockWarnings = "24",
  depletedOut = "12",
}) {
  const cards = [
    {
      id: "total-skus",
      label: "TOTAL HARDWARE SKUS",
      value: totalSkus,
      valueColor: "text-white",
      icon: LayoutGrid,
      iconStyle: "bg-[#0E1A30] border-blue-800/50 text-blue-400",
    },
    {
      id: "in-stock",
      label: "ACTIVE IN-STOCK",
      value: activeInStock,
      valueColor: "text-cyan-400",
      icon: CheckCircle2,
      iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
    },
    {
      id: "low-stock",
      label: "LOW STOCK WARNINGS",
      value: lowStockWarnings,
      valueColor: "text-amber-400",
      icon: AlertTriangle,
      iconStyle: "bg-[#1E1416] border-amber-900/50 text-amber-500",
    },
    {
      id: "depleted",
      label: "DEPLETED / OUT",
      value: depletedOut,
      valueColor: "text-rose-400",
      icon: MinusCircle,
      iconStyle: "bg-[#1F1318] border-rose-900/50 text-rose-400",
    },
  ];
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <ProductsHeader />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Status Card Component Fatta!</div>}>
          <MissionControlKPICards cards={cards} />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Filter Bar Component Fatta!</div>}>
          <InventoryFilterBar />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Tracking Table Component Fatta!</div>}>
          <StandaloneHardwareTable />
        </ErrorBoundary>
      </section>
    </>
  );
}
export default AdminProductPage;

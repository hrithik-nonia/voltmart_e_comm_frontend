// built in imports
import {
  LayoutGrid,
  CheckCircle2,
  AlertTriangle,
  MinusCircle,
} from "lucide-react";
import { useState } from "react";
import { useQuery } from "@apollo/client/react";

// custom imports
import MissionControlKPICards from "../components/commonComponents/MissionControlKPICards";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import StandaloneHardwareTable from "../components/adminProductPageComp/StandaloneHardwareTable";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import AdminAddProductForm from "../components/adminProductPageComp/AdminAddProductForm";
import { useAppProvider } from "../context/AppContext";
import { GET_ADMIN_PRODUCTS } from "../graphql/query/getProduct";
import { exportProductsCSV } from "../api/getApis";
import { useMessage } from "../context/MessageContext";
import { useAdminAppContext } from "../context/AdminAppContext";

function AdminProductPage() {
  // get category data from context
  const { categoryData, categoryLoading, categoryEerror } = useAppProvider();
  const { showError } = useMessage();
  const [page, setPage] = useState(1);
  const { inventoryStats, inventoryLoading, inventoryError } =
    useAdminAppContext();

  // set category
  const [category, setCategory] = useState(null);

  // get product data for admin product page
  const { data, loading, error } = useQuery(GET_ADMIN_PRODUCTS, {
    variables: {
      page: page,
      limit: 10,
      categoryId: category,
    },
  });

  // handle export products csv data
  const handleExportProductCsvData = async () => {
    try {
      await exportProductsCSV();
    } catch (err) {
      showError(err.message);
    }
  };

  // Product Card Data
  const cards = [
    {
      label: "TOTAL PRODUCTS",
      value: `${inventoryStats?.totalProducts}`,
      valueColor: "text-white",
      icon: LayoutGrid,
      iconStyle: "bg-[#0E1A30] border-blue-800/50 text-blue-400",
    },
    {
      label: "ACTIVE IN-STOCK",
      value: `${inventoryStats?.activeProducts}`,
      valueColor: "text-cyan-400",
      icon: CheckCircle2,
      iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
    },
    {
      label: "LOW STOCK WARNINGS",
      value: `${inventoryStats?.lowStock}`,
      valueColor: "text-amber-400",
      icon: AlertTriangle,
      iconStyle: "bg-[#1E1416] border-amber-900/50 text-amber-500",
    },
    {
      label: "STOCK OUT",
      value: `${inventoryStats?.outOfStock}`,
      valueColor: "text-rose-400",
      icon: MinusCircle,
      iconStyle: "bg-[#1F1318] border-rose-900/50 text-rose-400",
    },
  ];

  const [showAddProductForm, setShowAddProductForm] = useState(false);
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Products"
            text="Manage high-velocity hardware SKUs, quantum inventory, and regional
            catalog telemetry."
            btnText="Add Product"
            onclick={() => setShowAddProductForm(true)}
            handleExport={handleExportProductCsvData}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Status Card Component Fatta!</div>}>
          <MissionControlKPICards
            cards={cards}
            loading={inventoryLoading}
            error={inventoryError}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Filter Bar Component Fatta!</div>}>
          <InventoryFilterBar
            data={categoryData}
            loading={categoryLoading}
            error={categoryEerror}
            setCategory={setCategory}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Tracking Table Component Fatta!</div>}>
          <StandaloneHardwareTable
            paginationData={data?.getAdminProducts?.pagination}
            productData={data?.getAdminProducts?.products}
            loading={loading}
            error={error}
            setPage={setPage}
            page={page}
          />
        </ErrorBoundary>
      </section>

      {showAddProductForm && (
        <ErrorBoundary fallback={<div>Add Product Component Fatta!</div>}>
          <AdminAddProductForm onClose={() => setShowAddProductForm(false)} />
        </ErrorBoundary>
      )}
    </>
  );
}
export default AdminProductPage;

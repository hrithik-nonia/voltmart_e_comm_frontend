// built in imports
import { useState } from "react";
import { useQuery } from "@apollo/client/react";

// custom imports
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import CategoryTable from "../components/adminCategoriePageComp/AdminCategoryTable";
import AddCategoryModal from "../components/adminCategoriePageComp/AddCategoryModal";
import { exportCategoryCSV } from "../api/getApis";
import { GET_CATEGORY_FOR_ADMIN } from "../graphql/query/getCategory";

function AdminCategoriePage() {
  // state for show add category form
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);

  // state for status value
  const [status, setStatus] = useState(null);

  // get category api call
  const { data, loading, error } = useQuery(GET_CATEGORY_FOR_ADMIN, {
    variables: {
      status: status, // ← null = saare, "active" = sirf active
    },
  });

  // filter options
  const categoryFilterOpt = [
    { label: "All Categories", value: null },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Categories"
            text="Organize product catalog, configure taxonomy partitions, and route
            hardware classifications across the global mesh."
            btnText="Add Categorie"
            onclick={() => setShowAddCategoryForm(true)}
            handleExport={exportCategoryCSV}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Filter Bar Component Fatta!</div>}>
          <InventoryFilterBar
            data={categoryFilterOpt}
            setCategory={setStatus}
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Table Component Fatta!</div>}>
          <CategoryTable
            data={data?.getAdminCategory}
            loading={loading}
            error={error}
          />
        </ErrorBoundary>
      </section>

      {showAddCategoryForm && (
        <ErrorBoundary fallback={<div>Form Component Fatta!</div>}>
          <AddCategoryModal onClose={() => setShowAddCategoryForm(false)} />
        </ErrorBoundary>
      )}
    </>
  );
}
export default AdminCategoriePage;

// built in imports
import { useState } from "react";
import { useMutation } from "@apollo/client/react";

// custom imports
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import CategoryTable from "../components/adminCategoriePageComp/AdminCategoryTable";
import AddCategoryModal from "../components/adminCategoriePageComp/AddCategoryModal";
import { CREATE_CATEGORY } from "../graphql/mutations/category";

function AdminCategoriePage() {
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false);
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
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Filter Bar Component Fatta!</div>}>
          <InventoryFilterBar />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Table Component Fatta!</div>}>
          <CategoryTable />
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

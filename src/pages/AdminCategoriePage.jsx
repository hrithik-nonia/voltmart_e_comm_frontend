// built in imports

// custom imports
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import { AdminHeaderComp } from "../components/commonComponents/SmallComponents";
import InventoryFilterBar from "../components/commonComponents/InventoryFilterBar";
import CategoryTable from "../components/adminCategoriePageComp/AdminCategoryTable";

function AdminCategoriePage() {
  return (
    <>
      <section className="bg-[#070D19] p-6 sm:p-8 text-white font-sans space-y-5">
        <ErrorBoundary fallback={<div>Header Component Fatta!</div>}>
          <AdminHeaderComp
            heading="Categories"
            text="Organize product catalog, configure taxonomy partitions, and route
            hardware classifications across the global mesh."
            btnText="Add Categorie"
          />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Filter Bar Component Fatta!</div>}>
          <InventoryFilterBar />
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Table Component Fatta!</div>}>
          <CategoryTable />
        </ErrorBoundary>
      </section>
    </>
  );
}
export default AdminCategoriePage;

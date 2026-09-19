import SidebarFilters from "../components/filterPageComponents/SidebarFilters";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import ProductSortBar from "../components/filterPageComponents/ProductSortBar";
import ProductCard from "../components/commonComponents/ProductCard";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { FetchAppDataContext } from "../context/FetchAppDataContext";
import { useAppProvider } from "../context/AppContext";

function FilterPage() {
  // get products
  const {
    products,
    pagination,
    loading: productLoading,
    error: productError,
    nextPage,
  } = useContext(FetchAppDataContext);

  // get category data from context
  const { categoryData, categoryLoading, categoryEerror } = useAppProvider();

  const handleLoadMore = () => {
    const scrollY = window.scrollY;
    nextPage();

    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 100);
  };

  if (productLoading) {
    return (
      <>
        <div className="bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (productError) return <p>{productError.message}</p>;

  return (
    <>
      <section className="p-3 md:p-5 text-white grid grid-cols-1 md:grid-cols-5 bg-[#0B1323] font-sans gap-5">
        <div className="col-span-1">
          <ErrorBoundary fallback={<div>Sidebar Filters Component Fatta!</div>}>
            <SidebarFilters
              categories={categoryData?.getCategory ?? []}
              error={categoryEerror}
              loading={categoryLoading}
            />
          </ErrorBoundary>
        </div>

        <div className="col-span-4 space-y-5">
          <div>
            <ErrorBoundary
              fallback={<div>Product Sort Bar Component Fatta!</div>}
            >
              <ProductSortBar />
            </ErrorBoundary>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((item) => (
              <div key={item.id} className="w-full">
                <ProductCard value={item} />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              disabled={!pagination?.hasNext ? true : false}
              onClick={handleLoadMore}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer border rounded-xl px-5 py-2"
            >
              <span>Load More</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default FilterPage;

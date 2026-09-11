import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import ProductCard from "../components/productDetailPageComp/ProductCard";
import ProductInfo from "../components/productDetailPageComp/ProductInfo";

function ProductDetailPage() {
  return (
    <>
      <section className="p-3 md:p-10 text-white grid grid-cols-1 md:grid-cols-9 bg-[#0B1323] font-sans gap-5">
        <div className="col-span-5">
          <ErrorBoundary fallback={<div>Product Image Component Fatta!</div>}>
            <ProductCard />
          </ErrorBoundary>
        </div>

        <div className="col-span-4">
          <ErrorBoundary fallback={<div>Product Info Component Fatta!</div>}>
            <ProductInfo />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default ProductDetailPage;

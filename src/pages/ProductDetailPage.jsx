import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import ProductCard from "../components/productDetailPageComp/ProductCard";
import ProductInfo from "../components/productDetailPageComp/ProductInfo";
import { GET_PRODUCT_BY_ID } from "../graphql/query/getProduct";
import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { productId } = useParams();

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { productId },
    skip: !productId,
  });

  const product = data?.getProductById?.data ?? null;
  const specs = data?.getProductById?.specs ?? null;
  const image = data?.getProductById?.data?.image ?? null;

  return (
    <>
      <section className="p-3 md:p-10 text-white grid grid-cols-1 md:grid-cols-9 bg-[#0B1323] font-sans gap-5">
        <div className="col-span-5">
          <ErrorBoundary fallback={<div>Product Image Component Fatta!</div>}>
            <ProductCard
              image={image}
              specs={specs}
              loading={loading}
              error={error}
            />
          </ErrorBoundary>
        </div>

        <div className="col-span-4">
          <ErrorBoundary fallback={<div>Product Info Component Fatta!</div>}>
            <ProductInfo product={product} loading={loading} error={error} />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default ProductDetailPage;

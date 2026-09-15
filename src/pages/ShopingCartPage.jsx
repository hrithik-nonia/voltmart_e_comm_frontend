import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import MyCart from "../components/cartPageComp/CartItem";
import { GET_CART_DATA } from "../graphql/query/getCartData";
import { useQuery } from "@apollo/client/react";

function ShopingCartPage() {
  // get cart data
  const { data, loading, error } = useQuery(GET_CART_DATA);

  return (
    <>
      <section className="p-3 md:p-10 text-white bg-[#0B1323] font-sans gap-5">
        <div className="col-span-7">
          <ErrorBoundary fallback={<div>Product Data Component Fatta!</div>}>
            <MyCart data={data} loading={loading} error={error} />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default ShopingCartPage;

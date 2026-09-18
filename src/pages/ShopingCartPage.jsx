import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import MyCart from "../components/cartPageComp/CartItem";
import { useAppProvider } from "../context/AppContext";

function ShopingCartPage() {
  const { cartLoading, cartError, cartData } = useAppProvider();

  return (
    <>
      <section className="p-3 md:p-10 text-white bg-[#0B1323] font-sans gap-5">
        <div className="col-span-7">
          <ErrorBoundary fallback={<div>Product Data Component Fatta!</div>}>
            <MyCart data={cartData} loading={cartLoading} error={cartError} />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default ShopingCartPage;

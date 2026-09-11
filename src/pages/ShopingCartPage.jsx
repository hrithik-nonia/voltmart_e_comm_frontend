import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import MyCart from "../components/cartPageComp/CartItem";
import OrderSummary from "../components/cartPageComp/OrderSummary";

function ShopingCartPage() {
  return (
    <>
      <section className="p-3 md:p-10 text-white grid grid-cols-1 md:grid-cols-10 bg-[#0B1323] font-sans gap-5">
        <div className="col-span-7">
          <ErrorBoundary fallback={<div>Product Image Component Fatta!</div>}>
            <MyCart />
          </ErrorBoundary>
        </div>

        <div className="col-span-3">
          <ErrorBoundary fallback={<div>Product Info Component Fatta!</div>}>
            <OrderSummary />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default ShopingCartPage;

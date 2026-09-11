import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import CheckoutHeader from "../components/checkOutPageComp.jsx/CheckoutHeader";
import DeliveryAddress from "../components/checkOutPageComp.jsx/DeliveryAddress";

function SecureCheckOutPage() {
  return (
    <>
      <section className="p-3 md:p-10 text-white grid grid-cols-1 md:grid-cols-9 bg-[#0B1323] font-sans gap-5">
        <div className="col-span-5 space-y-5">
          <ErrorBoundary fallback={<div>Heading Component Fatta!</div>}>
            <CheckoutHeader />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div>Heading Component Fatta!</div>}>
            <DeliveryAddress />
          </ErrorBoundary>
        </div>

        <div className="col-span-4">
          <ErrorBoundary fallback={<div>Product Info Component Fatta!</div>}>
            {/* <ProductInfo /> */}
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default SecureCheckOutPage;

import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import CheckoutHeader from "../components/checkOutPageComp.jsx/CheckoutHeader";
import DeliveryAddress from "../components/checkOutPageComp.jsx/DeliveryAddress";
import OrderSummaryCard from "../components/checkOutPageComp.jsx/OrderSummaryCard";
import PaymentMethodWidget from "../components/checkOutPageComp.jsx/PaymentMethodWidget";
import { useParams } from "react-router-dom";

function SecureCheckOutPage() {
  const { productId } = useParams();

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

          <ErrorBoundary
            fallback={<div>Payment Method Widget Component Fatta!</div>}
          >
            <PaymentMethodWidget />
          </ErrorBoundary>
        </div>

        <div className="col-span-4">
          <ErrorBoundary fallback={<div>Product Info Component Fatta!</div>}>
            <OrderSummaryCard />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default SecureCheckOutPage;

import { useEffect } from "react";
import {
  Eye,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Banknote,
  CreditCard,
  CircleHelp,
} from "lucide-react";
import { BadgeStyle } from "../../utils/smallFunctions";

export default function OrderDashboard({
  data,
  loading,
  error,
  setPage,
  setLimit,
}) {
  // set limit
  useEffect(() => {
    setLimit(10);
    // eslint-disable-next-line
  }, []);

  // Get Data Safely
  const ordersData = data?.orders || [];
  const paginationData = data?.pagination || {};

  // calculate total tages
  const totalPages =
    Math.ceil(paginationData.total / paginationData.limit) || 1;

  // handle show payment method icon
  const handlePaymentIcon = (method) => {
    const value = method?.toLowerCase();
    if (value === "upi") {
      return <Smartphone size={12} className="text-slate-400" />;
    } else if (value === "card") {
      return <CreditCard size={12} className="text-slate-400" />;
    } else if (value === "cash on delivery") {
      return <Banknote size={12} className="text-slate-400" />;
    } else {
      return <CircleHelp size={12} className="text-slate-400" />;
    }
  };

  // handle show product's first letter
  const handleShowProductFirstLetter = (name) => {
    return name?.slice(0, 1);
  };

  // handle previous button
  const handlePrevBtn = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  // show loading state
  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center font-semibold text-lg font-sans">
          Loading...
        </div>
      </>
    );
  }

  // show error if occured
  if (error) {
    return (
      <>
        <div className="flex justify-center items-center font-semibold text-lg font-sans">
          {error?.message}
        </div>
      </>
    );
  }

  return (
    <div className="w-full bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/50 p-3 sm:p-4 font-sans">
      {/* Page header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-slate-100 text-lg font-semibold tracking-tight">
            Order Management
          </h1>
          <p className="text-slate-500 text-xs mt-0.5 tracking-wide">
            Product fulfillment · relay node view
          </p>
        </div>
      </div>

      {/* Table card */}
      <div className="rounded-xl border border-slate-800 overflow-hidden">
        {/* Column headers */}
        <div
          className="bg-[#0f1520] border-b border-slate-800 px-4 py-2.5 grid items-center"
          style={{
            gridTemplateColumns: "90px 1fr 1.3fr 150px 150px 140px 130px 70px",
          }}
        >
          {[
            "ORDER ID",
            "CUSTOMER NAME",
            "SPECIFICATION",
            "ORDER DATE",
            "NET VALUE",
            "SETTLEMENT",
            "FULFILLMENT STATE",
            "ACTION",
          ].map((h) => (
            <span
              key={h}
              className="text-[9px] tracking-widest font-bold text-slate-600 uppercase"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        {ordersData?.map((o) => (
          <div
            key={o.id}
            className="grid items-center gap-x-4 px-4 py-3.5 border-b border-slate-800/60 hover:bg-slate-800/20 transition-colors"
            style={{
              gridTemplateColumns:
                "90px 1fr 1.7fr 140px 100px 140px 130px 70px",
            }}
          >
            {/* Order ID */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-[11px] text-slate-500">
                ⬡
              </div>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold truncate">
                {o.orderNumber}
              </span>
            </div>

            {/* Customer */}
            <div className="min-w-0">
              <div className="text-slate-200 text-sm font-medium truncate">
                {o.customerName}
              </div>
              <div className="text-slate-500 text-xs truncate">
                {o.customerEmail}
              </div>
            </div>

            {/* Hardware */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 font-semibold text-emerald-500/90">
                {handleShowProductFirstLetter(o.productName)}
              </div>
              <div className="min-w-0">
                <div className="text-slate-200 text-xs font-medium leading-snug truncate">
                  {o.productName}
                </div>
                <div className="text-slate-500 text-xs">
                  QTY: {o.quantity} {o.specsType.brand} {o.specsType.color}{" "}
                  {o.specsType.warranty}
                </div>
              </div>
            </div>

            {/* Telemetry */}
            <div className="font-mono text-xs leading-relaxed">
              <div className="text-slate-300">{o.orderDate}</div>
            </div>

            {/* Net value */}
            <div className="text-slate-100 text-sm font-semibold">
              ₹{o.totalPrice}
            </div>

            {/* Settlement */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                {handlePaymentIcon(o.paymentMethod)}
              </div>
              <div className="leading-tight">
                <div className="text-slate-200 text-xs font-medium">
                  {o.paymentMethod === null ? "Not Provided" : o.paymentMethod}
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div>
              <span
                className={`items-center gap-1.5 px-2 py-1 rounded-md border text-[11px] font-medium 
                  whitespace-nowrap ${BadgeStyle(o.fulfillmentStatus)}`}
              >
                {o.fulfillmentStatus}
              </span>
            </div>

            {/* Action */}
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-slate-600 text-slate-300 text-xs font-medium transition-colors">
              <Eye size={11} />
              View
            </button>
          </div>
        ))}
      </div>

      {/* Footer / Pagination */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-slate-500">
          Showing{" "}
          <span className="text-slate-300 font-medium">
            {paginationData.page} to {totalPages}
          </span>{" "}
          of{" "}
          <span className="text-slate-300 font-medium">
            {ordersData.length}
          </span>{" "}
          orders
        </span>

        <div className="flex items-center gap-1">
          <PagBtn onClick={handlePrevBtn} disabled={paginationData.page === 1}>
            <ChevronLeft size={13} />
          </PagBtn>

          <PagBtn active>{paginationData.page}</PagBtn>

          <PagBtn
            onClick={() => setPage((prev) => prev + 1)}
            disabled={paginationData.page === totalPages}
          >
            <ChevronRight size={13} />
          </PagBtn>
        </div>
      </div>
    </div>
  );
}

function PagBtn({ children, active, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`min-w-[32px] h-8 px-2 flex items-center justify-center rounded-md border text-xs font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
        active
          ? "border-cyan-500 bg-cyan-500/20 text-cyan-300"
          : "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-400"
      }`}
    >
      {children}
    </button>
  );
}

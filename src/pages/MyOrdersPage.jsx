import { useState } from "react";
import { RotateCcw, FileText, XCircle } from "lucide-react";
import { useQuery } from "@apollo/client/react";
import { GET_MY_ORDERS } from "../graphql/query/getOrders";
import OrderDetailsModal from "../components/myOrderPageComp/OrderDetailsModal";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";

export default function MyOrdersDashboard({
  onBuyAgain = () => {},
  onCancelOrder = () => {},
}) {
  const [activeTab, setActiveTab] = useState("all");
  const [showDetaliOrderData, setShowDetailOrderData] = useState(false);
  const [orderId, setOrderId] = useState(null);

  // ── API call ──
  const { data, loading, error } = useQuery(GET_MY_ORDERS, {
    variables: {
      status: activeTab === "all" ? null : activeTab.toUpperCase(),
    },
  });

  const orders = data?.getOrders || [];

  // date time conversion
  const readableDate = (date) =>
    new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  // order status style
  const style = (status) => {
    let styleStatus = status.toLowerCase();
    if (styleStatus === "pending") {
      return "bg-amber-950/80 border-amber-800/60 text-amber-400";
    } else if (styleStatus === "delivered") {
      return "bg-emerald-950/80 border-emerald-800/60 text-emerald-400";
    } else if (styleStatus === "shipped") {
      return "bg-blue-950/80 border-blue-800/60 text-blue-400";
    } else if (styleStatus === "cancelled") {
      return "bg-red-950/80 border-red-800/60 text-red-400";
    }
  };

  // payment status style
  const paymentStyle = (status) => {
    let paymentStatus = status.toLowerCase();
    if (paymentStatus === "pending") {
      return "bg-amber-950/80 border-amber-800/60 text-amber-400";
    } else if (paymentStatus === "delivered") {
      return "bg-emerald-950/80 border-emerald-800/60 text-emerald-400";
    } else if (paymentStatus === "shipped") {
      return "bg-blue-950/80 border-blue-800/60 text-blue-400";
    } else if (paymentStatus === "cancelled") {
      return "bg-red-950/80 border-red-800/60 text-red-400";
    }
  };

  //handle vied detail button
  const handleViewBtn = (orderId) => {
    setShowDetailOrderData(true);
    setOrderId(orderId);
  };

  const tabs = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending" },
    { id: "shipped", label: "Shipped" },
    {
      id: "delivered",
      label: "Delivered",
    },
    {
      id: "cancelled",
      label: "Cancelled",
    },
  ];

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (error) return <div className="text-red-400 p-8">{error.message}</div>;

  return (
    <>
      <div className="bg-[#070D19] p-4 sm:p-8 font-sans text-left space-y-6 relative">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            My Orders
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Track shipments, download invoices, and reorder hardware
            requisitions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 border-b border-slate-800/80 overflow-x-auto pb-1 text-xs sm:text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 pb-2.5 font-bold transition-all cursor-pointer shrink-0 border-b-2 ${
                activeTab === tab.id
                  ? "border-blue-500 text-white"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order?.id}
                className="bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/40 p-5 space-y-4"
              >
                {/* Order Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400">
                    <span className="text-slate-200 font-bold">
                      {order?.orderNumber}
                    </span>
                    <span>•</span>
                    <span>Order Date {readableDate(order?.createdAt)}</span>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold ${style(order?.deliveryStatus)}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current inline-block" />
                    {order?.deliveryStatus}
                  </span>
                </div>

                {/* Product Detail Section */}
                <div className="flex items-start justify-between gap-4 pt-1">
                  <div className="flex items-start gap-3.5 min-w-0">
                    {/* Item Thumbnail */}
                    <div className="h-12 w-12 rounded-xl bg-[#050A14] border border-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                      <img src={order?.productImage} alt={order?.productName} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                        {order?.productName}
                      </h3>

                      <p className="text-[12px] font-semibold text-slate-400">
                        QTY: {order?.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Price & Tag */}
                  <div className="text-right shrink-0">
                    <div className="text-base sm:text-lg font-extrabold text-white font-mono">
                      ₹{order?.total}
                    </div>
                    <span
                      className={`text-[11px] font-mono font-semibold border rounded-2xl py-1 px-3 ${paymentStyle(order?.paymentStatus)} `}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current inline-block animate-pulse mr-1" />
                      {order?.paymentStatus}
                    </span>
                  </div>
                </div>

                {/* Footer Actions & Messages */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 pt-2 border-t border-slate-800/60">
                  {/* Right Action Buttons */}
                  <div className="flex items-center gap-2.5 justify-end">
                    {(order?.deliveryStatus === "pending" ||
                      order?.deliveryStatus === "confirmed" ||
                      order?.deliveryStatus === "shipped") && (
                      <button
                        type="button"
                        onClick={() => onCancelOrder(order)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-800/50 text-xs font-bold text-rose-400 transition-colors cursor-pointer"
                      >
                        <XCircle className="h-3.5 w-3.5" />
                        <span>Cancel Order</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleViewBtn(order?.id)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>View Details</span>
                    </button>

                    {order?.deliveryStatus === "delivered" && (
                      <button
                        type="button"
                        onClick={() => onBuyAgain(order)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/60 text-xs font-bold text-amber-400 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Buy Again</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500 font-mono text-sm">
              No orders found in this category.
            </div>
          )}
        </div>
      </div>

      {showDetaliOrderData && (
        <ErrorBoundary fallback={<div>Detail Order Data Component Fatta!</div>}>
          <OrderDetailsModal
            onClose={() => setShowDetailOrderData(false)}
            orderId={orderId}
            readableDate={readableDate}
            badgeStyle={style}
            paymentStyle={paymentStyle}
          />
        </ErrorBoundary>
      )}
    </>
  );
}

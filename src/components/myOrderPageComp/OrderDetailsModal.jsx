import { Package, X, MapPin } from "lucide-react";
import { GET_ORDER_BY_ID } from "../../graphql/query/getOrders";
import { useQuery } from "@apollo/client/react";

export default function OrderDetailsModal({
  onClose,
  orderId,
  readableDate,
  badgeStyle,
  paymentStyle,
}) {
  const { data, loading, error } = useQuery(GET_ORDER_BY_ID, {
    variables: { orderId },
  });

  // get data safely
  const order = data?.getOrderById || null;

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (error) return <div className="text-red-400 p-8">{error.message}</div>;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center overflow-hidden">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg sm:max-w-xl bg-[#091122] text-white rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/90 p-5 sm:p-7 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Box Icon Container */}
            <div className="h-11 w-11 rounded-xl bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
              <Package className="h-5 w-5 stroke-[2]" />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                Order Details
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-0.5">
                <span>{order.orderNumber}</span>
                <span>•</span>
                <span>{readableDate(order.createdAt)}</span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-slate-800/60"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 stroke-[2]" />
          </button>
        </div>

        {/* Status Bar */}
        <div className="bg-[#050A14] rounded-2xl border border-slate-800/80 p-3.5 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Order Status:</span>
            <span
              className={`rounded-full border px-3 py-0.5 font-bold ${badgeStyle(order.deliveryStatus)}`}
            >
              {order.deliveryStatus}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">Payment:</span>
            <span
              className={`rounded-full border px-3 py-0.5 font-bold ${paymentStyle(order.paymentStatus)}`}
            >
              {order.paymentStatus}
            </span>
          </div>
        </div>

        {/* Order Items Section */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            ORDER ITEMS
          </h4>

          <div className="bg-[#050A14] rounded-2xl border border-slate-800/80 p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                <img src={order.productImage} alt={order.productName} />
              </div>

              <div className="min-w-0">
                <h5 className="text-sm font-bold text-white tracking-tight truncate">
                  {order.productName}
                </h5>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Qty: {order.quantity}
                </p>
              </div>
            </div>

            <div className="text-sm sm:text-base font-extrabold text-white font-mono shrink-0">
              ₹{order.amounts.subtotal}
            </div>
          </div>
        </div>

        {/* Delivery Address Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span>DELIVERY ADDRESS</span>
          </div>

          <div className="bg-[#050A14] rounded-2xl border border-slate-800/80 p-4 space-y-1 text-xs font-mono text-slate-400">
            <p className="text-sm font-bold text-white font-sans">
              NAME: {order.address.fullName}
            </p>
            <p>PHONE: {order.address.phoneNum}</p>
            <p className="pt-1">STATE: {order.address.state}</p>
            <p>CITY: {order.address.city}</p>
            <p>STREET: {order.address.streetAddress}</p>
            <p>PIN: {order.address.pinCode}</p>
          </div>
        </div>

        {/* Price Summary Section */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            PRICE SUMMARY
          </h4>

          <div className="bg-[#050A14] rounded-2xl border border-slate-800/80 p-4 space-y-2.5 text-xs font-mono text-slate-400">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="text-white font-bold">
                ₹{order.amounts.subtotal}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span>₹{order.amounts.discount}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>₹{order.amounts.shipping}</span>
            </div>

            <div className="border-t border-slate-800/80 pt-2.5 flex items-center justify-between">
              <span className="text-sm font-bold text-white font-sans">
                Total
              </span>
              <span className="text-base font-extrabold text-white">
                ₹{order.total}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

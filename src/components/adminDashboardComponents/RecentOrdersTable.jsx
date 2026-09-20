import { useEffect } from "react";
import { Filter } from "lucide-react";
import { BadgeStyle } from "../../utils/smallFunctions";

export default function RecentOrdersTable({
  data,
  loading,
  error,
  setPage,
  setLimit,
}) {
  useEffect(() => {
    setLimit(5);
    // eslint-disable-next-line
  }, []);

  const ordersData = data?.orders || [];
  const paginationData = data?.pagination || {};

  // calculate total tages
  const totalPages =
    Math.ceil(paginationData.total / paginationData.limit) || 1;

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center font-semibold text-lg font-sans">
          Loading...
        </div>
      </>
    );
  }

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
    <section>
      <div className="w-full bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-7 space-y-6">
        {/* Top Header & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Title & Badge */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Recent Orders
            </h2>
            <span className="rounded-full bg-blue-950/90 border border-blue-800/60 px-3 py-0.5 text-xs font-mono font-bold text-blue-400">
              {ordersData?.length} Active Today
            </span>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Search Filter Input */}
            <div className="relative flex items-center">
              <Filter className="absolute left-3.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Filter SKU, customer, or ID..."
                className="w-56 sm:w-64 pl-9 pr-4 py-2 bg-[#050A14] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#050A14] text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider rounded-xl">
                <th className="py-3.5 px-4 rounded-l-xl">ORDER NO</th>
                <th className="py-3.5 px-4">CUSTOMER</th>
                <th className="py-3.5 px-4">PRODUCT UNIT</th>
                <th className="py-3.5 px-4">AMOUNT</th>
                <th className="py-3.5 px-4 text-right rounded-r-xl">STATUS</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {ordersData.length > 0 ? (
                ordersData?.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-slate-800/30 transition-colors group"
                  >
                    {/* Order ID */}
                    <td className="py-4 px-4 font-mono font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {order?.orderNumber}
                    </td>

                    {/* Customer */}
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-bold text-white tracking-tight">
                          {order.customerName}
                        </p>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {order.customerEmail}
                        </p>
                      </div>
                    </td>

                    {/* Hardware Unit */}
                    <td className="py-4 px-4">
                      <div className="flex gap-.5 flex-col">
                        <span className="font-semibold text-slate-200">
                          {order.productName}
                        </span>

                        <span className="text-slate-200 text-[12px]">
                          QTY: {order.quantity}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="py-4 px-4 font-extrabold text-white tracking-tight">
                      ₹{order.totalPrice}
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono font-bold shrink-0 ${BadgeStyle(order.fulfillmentStatus)}`}
                      >
                        <span>{order.fulfillmentStatus}</span>
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-xs font-mono text-slate-500"
                  >
                    No matching orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer & Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
          <p className="font-medium">
            Showing{" "}
            <span className="text-slate-200 font-bold">
              {ordersData.length}
            </span>{" "}
            of {paginationData.total} orders pending routing verification
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={paginationData.page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg bg-[#050A14] border border-slate-800 hover:bg-slate-800/60 text-slate-300 disabled:opacity-40 font-bold transition-colors cursor-pointer"
            >
              Previous
            </button>

            <span className="px-2 font-mono font-bold text-slate-300">
              Page {paginationData.page} / {totalPages}
            </span>

            <button
              type="button"
              disabled={!paginationData.hasNext}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1.5 rounded-lg bg-[#050A14] border border-slate-800 hover:bg-slate-800/60 text-slate-300 disabled:opacity-40 font-bold transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

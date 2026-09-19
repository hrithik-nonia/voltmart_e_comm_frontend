import { Pencil, ChevronLeft, ChevronRight } from "lucide-react";

export default function StandaloneHardwareTable({
  onEdit = () => {},
  paginationData,
  productData,
  loading,
  error,
  setPage,
  page,
}) {
  const handleClickPrev = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  const handleClickNext = () => {
    setPage((prev) => prev + 1);
  };

  if (loading)
    return (
      <>
        <div className="bg-gray-800 flex items-center justify-center text-lg font-semibold">
          Loading...
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="bg-gray-800 flex items-center justify-center text-lg font-semibold">
          {error?.message}
        </div>
      </>
    );

  return (
    <section>
      <div className="w-full bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-7 space-y-6">
        {/* Table Viewport */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[950px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#050A14] text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider rounded-xl">
                <th className="py-3.5 px-4 rounded-l-xl">
                  PRODUCT MODEL / SPEC
                </th>
                <th className="py-3.5 px-4">SKU TELEMETRY</th>
                <th className="py-3.5 px-4">PUBLISHED</th>
                <th className="py-3.5 px-4">MSRP (USD)</th>
                <th className="py-3.5 px-4">REALTIME STOCK</th>
                <th className="py-3.5 px-4">FOR SALE</th>
                <th className="py-3.5 px-4 rounded-r-xl w-10"></th>
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {productData?.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-800/30 transition-colors group "
                >
                  {/* Hardware Model & Spec */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="h-12 w-12 rounded-xl object-cover border border-slate-800 shrink-0"
                      />
                      <div>
                        <p className="font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                          {item.productName}
                        </p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {item?.specs?.brand} {item?.specs?.color}
                          {item?.specs?.warranty}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* SKU Telemetry Badge */}
                  <td className="py-4 px-4">
                    <span className="inline-block rounded-md bg-blue-950/80 border border-blue-800/60 px-2.5 py-1 text-xs font-mono font-bold text-blue-400">
                      {item.sku}
                    </span>
                  </td>

                  {/* Architecture Pill */}
                  <td className="py-4 px-4">
                    <span className="inline-block rounded-full bg-blue-950/60 border border-blue-800/40 px-3 py-1 text-xs font-semibold text-slate-300">
                      {item.createdAt}
                    </span>
                  </td>

                  {/* MSRP Price */}
                  <td className="py-4 px-4 font-mono font-extrabold text-white text-base">
                    ₹{item.price}
                  </td>

                  {/* Stock Progress Bar */}
                  <td className="py-4 px-4 w-44">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="text-cyan-400">
                          {item.stock} Units
                        </span>
                        <span className="text-slate-400">
                          {item.stockStatus}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Node Health Status */}
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${item.isActive ? "from-blue-600 to-cyan-400" : "bg-rose-950/80 border-rose-800/60 text-rose-400"}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current inline-block" />
                      {item.isActive ? "Active" : "inactive"}
                    </span>
                  </td>

                  {/* Edit Pencil Action */}
                  <td className="py-4 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => onEdit(item)}
                      className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="Edit item"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Info & Pagination Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/80">
          <div>
            Showing Page{" "}
            <strong className="text-white">
              {page} Of{" "}
              {Math.ceil(paginationData?.total / paginationData?.limit)}
            </strong>{" "}
            of {paginationData?.total} Products •
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={page === 1}
              onClick={handleClickPrev}
              className="px-2.5 py-1 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Prev</span>
            </button>

            <button
              type="button"
              disabled={!paginationData?.hasNext}
              onClick={handleClickNext}
              className="px-2.5 py-1 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

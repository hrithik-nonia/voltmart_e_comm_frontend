import { useFetchAppDataContext } from "../../context/FetchAppDataContext";

export default function ProductSortBar() {
  const { pagination } = useFetchAppDataContext();

  return (
    <div className=" bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/50 px-5 sm:px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Product Count, Badge & Description */}
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2.5">
            <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
              Showing {pagination?.total} products
            </h3>

            <span className="rounded-full bg-blue-950/90 border border-blue-800/60 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
              LIVE SPEC
            </span>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            Sorted by popularity and direct express node delivery speed
          </p>
        </div>
      </div>
    </div>
  );
}

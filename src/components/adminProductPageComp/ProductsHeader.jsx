import { Download, Plus } from "lucide-react";

export default function ProductsHeader({
  onAddProduct = () => {},
  onExportCSV = () => {},
}) {
  return (
    <header>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Column: Title, Telemetry Badges & Subtitle */}
        <div className="space-y-2 text-left max-w-2xl">
          {/* Main Title & Badges Row */}
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Products
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
            Manage high-velocity hardware SKUs, quantum inventory, and regional
            catalog telemetry.
          </p>
        </div>

        {/* Right Column: Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {/* Export CSV Button */}
          <button
            type="button"
            onClick={onExportCSV}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#111C33] hover:bg-slate-800/80 border border-slate-800 text-xs sm:text-sm font-bold text-slate-200 transition-colors cursor-pointer"
          >
            <Download className="h-4 w-4 text-slate-400 stroke-[2.2]" />
            <span>Export CSV</span>
          </button>

          {/* Add Product Button */}
          <button
            type="button"
            onClick={onAddProduct}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all active:scale-[0.99] cursor-pointer"
          >
            <Plus className="h-4 w-4 stroke-[3]" />
            <span>Add Product</span>
          </button>
        </div>
      </div>
    </header>
  );
}

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "rating", label: "Top Rated" },
];

export default function ProductSortBar({
  totalProducts = 48,
  onSortChange = () => {},
  onLiveSpecToggle = () => {},
}) {
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [liveSpec, setLiveSpec] = useState(true);

  const handleSortSelect = (value) => {
    setSelectedSort(value);
    setIsDropdownOpen(false);
    onSortChange(value);
  };

  const handleToggle = () => {
    setLiveSpec(!liveSpec);
    onLiveSpecToggle(!liveSpec);
  };

  const currentLabel =
    sortOptions.find((o) => o.value === selectedSort)?.label || "Popularity";

  return (
    <div className=" bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/50 px-5 sm:px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Product Count, Badge & Description */}
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2.5">
            <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
              Showing {totalProducts} products
            </h3>

            <span className="rounded-full bg-blue-950/90 border border-blue-800/60 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
              LIVE SPEC
            </span>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            Sorted by popularity and direct express node delivery speed
          </p>
        </div>

        {/* Right: Sort Dropdown & Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Sort Dropdown */}
          <div className="relative flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Sort:</span>

            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              <span>{currentLabel}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-[#050A14] border border-slate-800 rounded-xl shadow-2xl py-1.5 z-30 text-left">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSortSelect(opt.value)}
                    className={`w-full flex items-center justify-between px-4 py-2 text-xs font-medium transition-colors ${
                      selectedSort === opt.value
                        ? "bg-blue-600/20 text-cyan-400"
                        : "text-slate-300 hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {selectedSort === opt.value && (
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Live Spec Toggle Switch */}
          <button
            type="button"
            onClick={handleToggle}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${
              liveSpec ? "bg-blue-600" : "bg-slate-700"
            }`}
            aria-label="Toggle Live Spec"
          >
            <span
              className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ${
                liveSpec ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

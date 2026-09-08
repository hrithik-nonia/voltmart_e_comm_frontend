import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Columns, Check } from "lucide-react";

const categoryOptions = [
  "All Hardware Categories",
  "Neural Compute",
  "Peripherals",
  "Displays",
  "Acoustics",
  "Terminals",
  "Capture Gear",
];

const inventoryLevelOptions = [
  "All Inventory Levels",
  "In Stock (Healthy)",
  "Low Stock Warning",
  "Depleted / Out of Stock",
];

const fulfillmentOptions = [
  "Fulfillment: Global Mesh",
  "US-East Relay Node",
  "EU-Central Relay Node",
  "AP-South (BLR/BOM) Node",
];

export default function InventoryFilterBar({
  onSearch = () => {},
  onCategorySelect = () => {},
  onInventorySelect = () => {},
  onFulfillmentSelect = () => {},
  onCustomizeColumns = () => {},
}) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [selectedLevel, setSelectedLevel] = useState(inventoryLevelOptions[0]);
  const [selectedFulfillment, setSelectedFulfillment] = useState(
    fulfillmentOptions[0],
  );

  const [activeDropdown, setActiveDropdown] = useState(null); // 'cat' | 'level' | 'fulfillment' | null
  const inputRef = useRef(null);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

  return (
    <div className="w-full bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/50 p-3 sm:p-4 font-sans">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Search Input Box */}
        <div className="relative flex items-center flex-1 max-w-md">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search SKU, hardware unit, neural deck or model identifier..."
            className="w-full pl-10 pr-12 py-2.5 bg-[#050A14] border border-slate-800/90 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />
          <kbd className="absolute right-3 px-1.5 py-0.5 bg-slate-800/80 border border-slate-700/80 rounded text-[10px] font-mono text-slate-400 pointer-events-none">
            ⌘ K
          </kbd>
        </div>

        {/* Filter Dropdowns & Options */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(activeDropdown === "cat" ? null : "cat")
              }
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              <span>{selectedCategory}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {activeDropdown === "cat" && (
              <div className="absolute left-0 lg:right-0 lg:left-auto mt-2 w-56 bg-[#050A14] border border-slate-800 rounded-xl shadow-2xl py-1.5 z-30 text-left">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(opt);
                      setActiveDropdown(null);
                      onCategorySelect(opt);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800/60 transition-colors"
                  >
                    <span>{opt}</span>
                    {selectedCategory === opt && (
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Inventory Level Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(activeDropdown === "level" ? null : "level")
              }
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              <span>{selectedLevel}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {activeDropdown === "level" && (
              <div className="absolute left-0 lg:right-0 lg:left-auto mt-2 w-56 bg-[#050A14] border border-slate-800 rounded-xl shadow-2xl py-1.5 z-30 text-left">
                {inventoryLevelOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedLevel(opt);
                      setActiveDropdown(null);
                      onInventorySelect(opt);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800/60 transition-colors"
                  >
                    <span>{opt}</span>
                    {selectedLevel === opt && (
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Fulfillment Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "fulfillment" ? null : "fulfillment",
                )
              }
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              <span>{selectedFulfillment}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {activeDropdown === "fulfillment" && (
              <div className="absolute left-0 lg:right-0 lg:left-auto mt-2 w-56 bg-[#050A14] border border-slate-800 rounded-xl shadow-2xl py-1.5 z-30 text-left">
                {fulfillmentOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedFulfillment(opt);
                      setActiveDropdown(null);
                      onFulfillmentSelect(opt);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800/60 transition-colors"
                  >
                    <span>{opt}</span>
                    {selectedFulfillment === opt && (
                      <Check className="h-3.5 w-3.5 text-cyan-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Column Customize Icon Button */}
          <button
            type="button"
            onClick={onCustomizeColumns}
            className="p-2.5 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Customize Columns"
          >
            <Columns className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

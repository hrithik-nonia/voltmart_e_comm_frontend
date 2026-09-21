import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Check, RotateCcw } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function InventoryFilterBar({
  data,
  loading,
  error,
  setCategory,
  onSearch = () => {},
}) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  // for track path
  const location = useLocation();

  const [activeDropdown, setActiveDropdown] = useState(null);
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

  // handle click category
  const handleClickCategory = (categoryId, optionName) => {
    setCategory(categoryId);
    setSelectedCategory(optionName);
    setActiveDropdown(null);
  };

  // handle click reset button
  const handleClickResetBtn = () => {
    setCategory(null);
    setSelectedCategory("All Categories");
    setActiveDropdown(null);
  };

  return (
    <div className="w-full bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/50 p-3 sm:p-4 font-sans">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Search Input Box */}
        <div className="relative flex items-center flex-1 max-w-md">
          <Search className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            title="Shortcut: Ctrl + K"
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

        <div className="flex ">
          {/* Filter Dropdowns & Options */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Category Dropdown */}
            <div className="relative">
              {error ? (
                <>
                  <p>{error?.message}</p>
                </>
              ) : (
                <>
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
                </>
              )}

              {activeDropdown === "cat" && (
                <div className="absolute left-0 lg:right-0 lg:left-auto mt-2 w-56 bg-[#050A14] border border-slate-800 rounded-xl shadow-2xl py-1.5 z-30 text-left">
                  {location.pathname === "/adminOrderPage" ? (
                    <>
                      {data?.map((opt) => (
                        <button
                          key={opt?.value}
                          type="button"
                          onClick={() => {
                            setCategory(opt?.value);
                            setSelectedCategory(opt?.label);
                            setActiveDropdown(null);
                          }}
                          className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800/60 transition-colors"
                        >
                          <span>{opt?.label}</span>
                          {selectedCategory === opt?.label && ( // ✅ fix
                            <Check className="h-3.5 w-3.5 text-cyan-400" />
                          )}
                        </button>
                      ))}
                    </>
                  ) : (
                    <>
                      {loading ? (
                        <>
                          <p>Loading...</p>
                        </>
                      ) : (
                        <>
                          {data?.getCategory?.map((opt) => (
                            <button
                              key={opt?.id}
                              type="button"
                              onClick={() =>
                                handleClickCategory(opt?.id, opt?.name)
                              }
                              className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800/60 transition-colors"
                            >
                              <span>{opt?.name}</span>
                              {selectedCategory === opt?.name && (
                                <Check className="h-3.5 w-3.5 text-cyan-400" />
                              )}
                            </button>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* filters reset button */}
          <button
            type="button"
            title="Reset Filters"
            className="pl-2"
            onClick={handleClickResetBtn}
          >
            <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-slate-600">
              <RotateCcw size={11} strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

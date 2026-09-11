import { useState } from "react";
import {
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const initialCategories = [
  { id: "smartphones", label: "Smartphones & 5G", count: 128, checked: true },
  { id: "laptops", label: "Laptops & Workstations", count: 64, checked: true },
  { id: "audio", label: "Wireless Audio & ANC", count: 92, checked: false },
  { id: "cameras", label: "Cameras & Drones", count: 45, checked: false },
  { id: "gaming", label: "Gaming & VR", count: 78, checked: false },
];

const initialBrands = [
  { id: "samsung", label: "Samsung", count: 18, checked: true },
  { id: "apple", label: "Apple", count: 24, checked: true },
  { id: "sony", label: "Sony", count: 15, checked: false },
  { id: "asus", label: "Asus ROG", count: 12, checked: false },
  { id: "dell", label: "Dell", count: 9, checked: false },
  { id: "bose", label: "Bose", count: 11, checked: false },
];

export default function SidebarFilters({ onClearAll = () => {} }) {
  const [categories, setCategories] = useState(initialCategories);
  const [brands, setBrands] = useState(initialBrands);
  const [inStockOnly, setInStockOnly] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);

  const handleCategoryToggle = (id) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c)),
    );
  };

  const handleBrandToggle = (id) => {
    setBrands((prev) =>
      prev.map((b) => (b.id === id ? { ...b, checked: !b.checked } : b)),
    );
  };

  const handleClearAll = () => {
    setCategories((prev) => prev.map((c) => ({ ...c, checked: false })));
    setBrands((prev) => prev.map((b) => ({ ...b, checked: false })));
    setInStockOnly(false);
    onClearAll();
  };

  return (
    <aside className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 text-left overflow-hidden">
      {/* Header: Filters Title & Clear All */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="h-4.5 w-4.5 text-white stroke-[2.2]" />
          <h3 className="text-base font-extrabold text-white tracking-tight">
            Filters
          </h3>
        </div>

        <button
          type="button"
          onClick={handleClearAll}
          className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <span>Clear All</span>
          <RotateCcw className="h-3 w-3 stroke-[2.5]" />
        </button>
      </div>

      <div className="p-5 space-y-6">
        {/* Categories Section */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="w-full flex items-center justify-between cursor-pointer"
          >
            <h4 className="text-sm font-bold text-white tracking-tight">
              Categories
            </h4>
            {categoriesOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-400" />
            )}
          </button>

          {categoriesOpen && (
            <div className="space-y-2.5">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={cat.checked}
                      onChange={() => handleCategoryToggle(cat.id)}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 accent-blue-600 cursor-pointer"
                    />
                    <span
                      className={`text-sm font-medium transition-colors ${
                        cat.checked
                          ? "text-blue-400 font-semibold"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {cat.label}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">
                    {cat.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/80" />

        {/* Brand Ecosystem Section */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setBrandsOpen(!brandsOpen)}
            className="w-full flex items-center justify-between cursor-pointer"
          >
            <h4 className="text-sm font-bold text-white tracking-tight">
              Brand Ecosystem
            </h4>
            {brandsOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-400" />
            )}
          </button>

          {brandsOpen && (
            <div className="space-y-2.5">
              {brands.map((brand) => (
                <label
                  key={brand.id}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={brand.checked}
                      onChange={() => handleBrandToggle(brand.id)}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 accent-blue-600 cursor-pointer"
                    />
                    <span
                      className={`text-sm font-medium transition-colors ${
                        brand.checked
                          ? "text-blue-400 font-semibold"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {brand.label}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400">
                    {brand.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer: In Stock Only Toggle */}
      <div className="px-5 py-4 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-bold text-white">In Stock Only</span>
          </div>

          <button
            type="button"
            onClick={() => setInStockOnly(!inStockOnly)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${
              inStockOnly ? "bg-blue-600" : "bg-slate-700"
            }`}
            aria-label="Toggle In Stock Only"
          >
            <span
              className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 ${
                inStockOnly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}

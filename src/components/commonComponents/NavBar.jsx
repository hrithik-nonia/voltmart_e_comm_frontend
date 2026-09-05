import { useState } from "react";
import { Zap, Search, Heart, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar({
  cartCount = 2,
  user = {
    name: "Alex Chen",
    tier: "Pro Hardware VIP",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  },
  onSearchClick,
}) {
  const [activeTab, setActiveTab] = useState("Catalog");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Catalog", "Specs Matrix", "Ecosystem", "Support Node"];

  return (
    <header className="bg-[#0A0E1A] text-white border-b border-slate-800/80 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Left: Logo & Navigation */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-2.5 shrink-0">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/50">
                <Zap className="h-4 w-4 fill-white stroke-[2.5]" />
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-wider text-slate-100 uppercase">
                VOLTMART
              </span>
            </a>

            {/* Nav Items (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveTab(item)}
                    className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-slate-800/90 text-white shadow-xs"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right: Search, Status, Actions, Profile */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Command Input Trigger */}
            <button
              type="button"
              onClick={onSearchClick}
              className="hidden lg:flex items-center gap-2.5 rounded-xl border border-slate-800 bg-[#111726] px-3.5 py-2 text-xs text-slate-400 hover:border-slate-700 hover:text-slate-300 transition-all cursor-pointer"
            >
              <Search className="h-4 w-4 text-slate-400" />
              <span className="font-medium">Search...</span>
              <kbd className="rounded-md border border-slate-700/60 bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* Express Status Badge */}
            <div className="hidden xl:flex items-center gap-2.5 rounded-xl border border-blue-900/50 bg-[#0E1B2E] px-3.5 py-1.5 shrink-0">
              <Zap className="h-4 w-4 text-cyan-400 fill-cyan-400/20 stroke-[2.5]" />
              <div className="text-left">
                <p className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase leading-tight">
                  EXPRESS STATUS
                </p>
                <p className="text-xs font-bold text-cyan-400 leading-tight">
                  Next-Hour Active
                </p>
              </div>
            </div>

            {/* Wishlist Heart Icon */}
            <button
              type="button"
              className="p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 stroke-[2]" />
            </button>

            {/* Shopping Cart Icon with Badge */}
            <button
              type="button"
              className="relative p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5 stroke-[2]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white ring-2 ring-[#0A0E1A]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile Pill */}
            <div className="flex items-center gap-3 pl-1 sm:pl-2 border-l border-slate-800/80">
              <div className="hidden sm:block text-right">
                <p className="text-xs font-bold text-white leading-tight">
                  {user.name}
                </p>
                <p className="text-[10px] font-semibold text-amber-500 leading-tight mt-0.5">
                  {user.tier}
                </p>
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="h-9 w-9 rounded-full object-cover border border-slate-700 shrink-0"
              />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden p-2 text-slate-300 hover:text-white rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0A0E1A] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setActiveTab(item);
                  setMobileMenuOpen(false);
                }}
                className={`text-left rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                  activeTab === item
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-800/40"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

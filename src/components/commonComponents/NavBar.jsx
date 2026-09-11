// built in imports
import { useState } from "react";
import {
  Zap,
  Search,
  ShoppingCart,
  Menu,
  X,
  LogIn,
  ClipboardList,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// component imports
import AuthForm from "./AuthForm";

export default function Navbar({
  cartCount = 2,
  user = {
    name: "Alex Chen",
    tier: "Pro Hardware VIP",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  },
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLogin = false;

  const [showAuthForm, setShowAuthForm] = useState(false);

  // for navigation
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-[#0A0E1A] text-white border-b border-slate-800/80 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Left: Logo & Navigation */}
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Brand Logo */}
              <a href="/" className="flex items-center gap-2.5 shrink-0">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/50">
                  <Zap className="h-4 w-4 fill-white stroke-[2.5]" />
                </div>
                <span className="text-lg sm:text-xl font-extrabold tracking-wider text-slate-100 uppercase">
                  VOLTMART
                </span>
              </a>
            </div>

            {/* Right: Search, Status, Actions, Profile */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Search Command Input Trigger */}
              <div className="hidden lg:flex items-center rounded-xl border border-slate-800 bg-[#111726]  text-xs text-slate-400 hover:border-slate-700 hover:text-slate-300 transition-all px-3">
                <Search className="h-4 w-4 text-slate-400 absolute" />

                <input
                  type="text "
                  placeholder="Search..."
                  className="w-full pl-6 py-2 outline-none"
                />

                <kbd className="rounded-md border border-slate-700/60 bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-300">
                  ⌘K
                </kbd>
              </div>

              {/* My Order Icon */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => navigate("/my-order")}
                  className="p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
                  aria-label="My Orders"
                >
                  <ClipboardList className="h-5 w-5 stroke-[2]" />
                </button>

                {/* Tooltip */}
                <span
                  className="
                    pointer-events-none
                    absolute right-0 top-full mt-2
                    hidden group-hover:block
                    whitespace-nowrap
                    rounded-md
                    bg-slate-900
                    px-2.5 py-1.5
                    text-[10px] font-medium text-white
                    shadow-lg
                    border border-slate-700
                    z-50
                  "
                >
                  My Orders
                </span>
              </div>

              {/* Shopping Cart Icon with Badge */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => navigate("/cart")}
                  className="relative cursor-pointer rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-white"
                  aria-label="Shopping Cart"
                >
                  <ShoppingCart className="h-5 w-5 stroke-[2]" />

                  {cartCount > 0 && (
                    <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white ring-2 ring-[#0A0E1A]">
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Tooltip */}
                <span
                  className="
                    pointer-events-none absolute right-0 top-full z-50 mt-2
                    hidden whitespace-nowrap rounded-md
                    border border-slate-700 bg-slate-900
                    px-2.5 py-1.5 text-[10px] font-medium text-white
                    shadow-lg group-hover:block
                  "
                >
                  Cart
                </span>
              </div>

              {/* User Profile Pill */}
              {isLogin ? (
                <>
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
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setShowAuthForm(true)}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-700 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  >
                    <span>Sign In</span>
                    <LogIn className="h-4 w-4 fill-white stroke-[2.5]" />
                  </button>
                </>
              )}

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
            <div className="items-center rounded-xl border border-slate-800 bg-[#111726]  text-xs text-slate-400 hover:border-slate-700 hover:text-slate-300 transition-all flex px-3">
              <Search className="h-4 w-4 text-slate-400 absolute" />

              <input
                type="text "
                placeholder="Search..."
                className="w-full pl-6 py-2 outline-none"
              />

              <kbd className="rounded-md border border-slate-700/60 bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-300">
                ⌘K
              </kbd>
            </div>
          </div>
        )}
      </header>

      {showAuthForm && <AuthForm onClose={() => setShowAuthForm(false)} />}
    </>
  );
}

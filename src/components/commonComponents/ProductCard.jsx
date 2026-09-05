// built in imports
import { Star, Heart, ShoppingCart } from "lucide-react";

// component imports

function ProductCard({ item, toggleWishlist, isWishlisted, onAddToCart }) {
  return (
    <>
      <div
        key={item.id}
        className="group flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-[#0F1829] p-4 sm:p-5 shadow-md hover:border-slate-700 hover:-translate-y-1 transition-all duration-200"
      >
        {/* Top Row: Badge & Wishlist Heart */}
        <div className="flex items-center justify-between">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider ${item.badgeStyle}`}
          >
            {item.badge}
          </span>

          <button
            type="button"
            onClick={() => toggleWishlist(item.id)}
            className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors focus:outline-none"
            aria-label="Add to wishlist"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isWishlisted ? "text-rose-500 fill-rose-500" : "stroke-[2]"
              }`}
            />
          </button>
        </div>

        {/* Product Image Container */}
        <div className="relative my-3 aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Info Stack */}
        <div className="space-y-2">
          {/* Star Rating Row */}
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-amber-400 stroke-[2]"
                />
              ))}
            </div>
            <span className="ml-1 text-slate-300 font-bold">{item.rating}</span>
            <span className="text-slate-500">({item.reviews})</span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-base font-bold text-white tracking-tight truncate group-hover:text-cyan-400 transition-colors cursor-pointer">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400 font-normal truncate mt-0.5">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Price & Add to Cart Row */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-800/60 mt-3">
          <div>
            <span className="text-lg font-black text-white tracking-tight">
              {item.price}
            </span>
            {item.originalPrice && (
              <span className="ml-2 text-xs font-semibold text-slate-500 line-through">
                {item.originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Orange Button */}
          <button
            type="button"
            onClick={() => onAddToCart && onAddToCart(item)}
            className="rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white p-2.5 shadow-md shadow-orange-500/20 active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </>
  );
}
export default ProductCard;

// built in imports
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

// component imports

function ProductCard({ value }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="group flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-[#0F1829] p-4 sm:p-5 shadow-md hover:border-slate-700 hover:-translate-y-1 transition-all duration-200 h-[350px] cursor-pointer"
        onClick={() => navigate(`/product-detail/${value.id}`)}
      >
        {/* Product Image Container */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 h-[180px] shrink-0">
          <img
            src={value.image}
            alt={value.productName}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Info Stack */}
        <div className="space-y-2">
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-base font-bold text-white tracking-tight truncate group-hover:text-cyan-400 transition-colors ">
              {value.productName}
            </h3>
            <p className="text-xs text-slate-400 font-normal truncate mt-0.5">
              {value.description}
            </p>
          </div>
        </div>

        {/* Price & Add to Cart Row */}
        <div className="pt-4 flex items-center justify-between border-t border-slate-800/60 mt-3">
          <div>
            {value.salePrice ? (
              <>
                <span className="text-lg font-black text-white tracking-tight">
                  RS {value.price}
                </span>

                <span className="ml-2 text-xs font-semibold text-slate-500 line-through">
                  {value.salePrice}
                </span>
              </>
            ) : (
              <>
                <span className="text-lg font-black text-white tracking-tight">
                  RS {value.price}
                </span>
              </>
            )}
          </div>

          {/* Add to Cart Orange Button */}
          <button
            type="button"
            className="rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white p-2.5 shadow-md shadow-orange-500/20 active:scale-95 transition-all focus:outline-none "
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

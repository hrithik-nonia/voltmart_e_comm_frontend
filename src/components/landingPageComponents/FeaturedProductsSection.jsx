// built in import
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// component imports
import { MockProducts } from "../../constants/constant";
import ProductCard from "../commonComponents/ProductCard";

export default function FeaturedProductsSection({
  products = MockProducts,
  onAddToCart,
  onViewAll,
}) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <section>
      <div className="space-y-8">
        {/* Header Bar */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] sm:text-xs font-extrabold tracking-widest text-cyan-400 uppercase mb-1">
              CURATED FLAGSHIPS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Products
            </h2>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((item) => {
            const isWishlisted = wishlist.includes(item.id);

            return (
              <ProductCard
                isWishlisted={isWishlisted}
                item={item}
                toggleWishlist={toggleWishlist}
                onAddToCart={onAddToCart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

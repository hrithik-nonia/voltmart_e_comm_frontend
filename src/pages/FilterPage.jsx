import SidebarFilters from "../components/filterPageComponents/SidebarFilters";
import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import ProductSortBar from "../components/filterPageComponents/ProductSortBar";
import ProductCard from "../components/commonComponents/ProductCard";
import { MockProducts } from "../constants/constant";
import { useState } from "react";

function FilterPage({ onAddToCart }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <>
      <section className="p-3 md:p-5 text-white grid grid-cols-1 md:grid-cols-5 bg-[#0B1323] font-sans gap-5">
        <div className="col-span-1">
          <ErrorBoundary fallback={<div>Sidebar Filters Component Fatta!</div>}>
            <SidebarFilters />
          </ErrorBoundary>
        </div>

        <div className="col-span-4 space-y-5">
          <div>
            <ErrorBoundary
              fallback={<div>Product Sort Bar Component Fatta!</div>}
            >
              <ProductSortBar />
            </ErrorBoundary>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MockProducts.map((item) => {
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

          <div>
            <button className="border py-2 px-5">load more</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default FilterPage;

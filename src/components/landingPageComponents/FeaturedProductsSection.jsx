// built in import
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// component imports
import ProductCard from "../commonComponents/ProductCard";
import { useFetchAppDataContext } from "../../context/FetchAppDataContext";

export default function FeaturedProductsSection() {
  const scrollRef = useRef(null);
  const lastCardRef = useRef(null);
  const [loadMoreButton, setLoadMoreButton] = useState(false);
  // get products
  const {
    products,
    pagination,
    loading: productLoading,
    error: productError,
    nextPage,
  } = useFetchAppDataContext();

  useEffect(() => {
    if (!lastCardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setLoadMoreButton(entries[0].isIntersecting); // true/false dono handle
      },
      { threshold: 0.5 },
    );

    observer.observe(lastCardRef.current);

    return () => observer.disconnect();
  }, [products]);

  const handleLoadMore = () => {
    const scrollLeft = scrollRef.current?.scrollLeft;
    setLoadMoreButton(false);
    nextPage();

    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft;
      }
    }, 100);
  };

  if (productLoading) {
    return (
      <>
        <div className="bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (productError) return <p>{productError.message}</p>;

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

          {loadMoreButton && pagination?.hasNext ? (
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer border rounded-xl px-5 py-2"
            >
              <span>Load More</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </button>
          ) : null}
        </div>

        {/* 4 Product Cards Grid */}
        <div className="flex overflow-x-auto gap-5 pb-2" ref={scrollRef}>
          {products.map((item, idx) => (
            <div
              key={item.id}
              ref={idx === products.length - 1 ? lastCardRef : null}
              className="w-[260px] sm:w-[300px] shrink-0 lg:w-[calc((100%-60px)/4)]"
            >
              <ProductCard value={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// built in imports

// component imports
import VoltmartHeroSection from "../components/landingPageComponents/VoltmartHeroSection";
import ShopByCategorySection from "../components/landingPageComponents/ShopByCategorySection";
import FeaturedProductsSection from "../components/landingPageComponents/FeaturedProductsSection";

function LandingPage() {
  return (
    <>
      {/* hero section */}
      <section>
        <VoltmartHeroSection />
      </section>

      <section className="bg-[#0B1323] text-white py-14 sm:py-20 px-6 sm:px-12 lg:px-16 space-y-5 md:space-y-15">
        {/* category section */}
        <section>
          <ShopByCategorySection />
        </section>

        {/* product section */}
        <section>
          <FeaturedProductsSection />
        </section>
        <section></section>
      </section>
    </>
  );
}
export default LandingPage;

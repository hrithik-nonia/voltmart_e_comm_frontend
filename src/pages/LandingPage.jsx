// built in imports
import { useQuery } from "@apollo/client/react";

// component imports
import VoltmartHeroSection from "../components/landingPageComponents/VoltmartHeroSection";
import ShopByCategorySection from "../components/landingPageComponents/ShopByCategorySection";
import FeaturedProductsSection from "../components/landingPageComponents/FeaturedProductsSection";
import TrustPerksBanner from "../components/landingPageComponents/TrustPerksBanner";
import { GET_CATEGORIES } from "../graphql/query/getCategory";

function LandingPage() {
  // get category data
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  return (
    <>
      {/* hero section */}
      <section>
        <VoltmartHeroSection />
      </section>

      <section className="bg-[#0B1323] text-white py-14 sm:py-20 px-6 sm:px-12 lg:px-16 space-y-5 md:space-y-15">
        {/* category section */}
        <section>
          <ShopByCategorySection
            categories={data?.getCategory ?? []}
            error={error}
            loading={loading}
          />
        </section>

        {/* product section */}
        <section>
          <FeaturedProductsSection />
        </section>

        {/* Trust Perks Banner */}
        <section>
          <TrustPerksBanner />
        </section>
      </section>
    </>
  );
}
export default LandingPage;

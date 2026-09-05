// built in imports

// component imports
import VoltmartHeroSection from "../components/landingPageComponents/VoltmartHeroSection";
import ShopByCategorySection from "../components/landingPageComponents/ShopByCategorySection";

function LandingPage() {
  return (
    <>
      <section>
        <VoltmartHeroSection />
      </section>

      <section className="bg-[#0B1323] text-white py-14 sm:py-20 px-6 sm:px-12 lg:px-16">
        <section>
          <ShopByCategorySection />
        </section>
        <section></section>
        <section></section>
      </section>
    </>
  );
}
export default LandingPage;

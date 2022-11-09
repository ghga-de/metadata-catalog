import HomeMidSection from "./homeMidSection/homeMidSection";
import HomeBottomSection from "./homeBottomSection/homeBottomSection";
import HomeTopSection from "./homeTopSection/homeTopSection";
import InstitutionsCarousel from "./institutionsCarousel/institutionsCarousel";

const Home = () => {
  return (
    <div className="mt-4 mx-auto px-5">
      <h2 className="fw-bold p-3 pb-0">The German Human Genome-Phenome Archive</h2>
      <h3 className="fw-bold ps-5 ms-4 pb-2 text-quaternary">Metadata Catalog</h3>
      <hr className="mx-3 border-primary mb-2" />
      <HomeTopSection />
      <HomeMidSection />
      <HomeBottomSection />
      <InstitutionsCarousel />
    </div>
  );
};

export default Home;

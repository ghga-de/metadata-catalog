import HomeMidSection from "./homeMidSection/homeMidSection";
import HomeTopSection from "./homeTopSection/homeTopSection";
import InstitutionsCarousel from "./homeInstitutions/homeInstitutionsCarousel";

const Home = () => {
  return (
    <div className="mt-4 mx-auto px-5">
      <h2 className="fw-bold p-3 pb-0">The German Human Genome-Phenome Archive</h2>
      <h3 className="fw-bold pb-2 text-quaternary" style={{marginLeft: "30em"}}>Metadata Catalog</h3>
      <hr className="mx-3 border-tertiary mb-3 opacity-100" />
      <HomeTopSection />
      <HomeMidSection />
      <InstitutionsCarousel />
    </div>
  );
};

export default Home;

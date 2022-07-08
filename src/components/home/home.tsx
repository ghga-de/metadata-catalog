import HomeMidSection from "./homeMidSection/homeMidSection";
import HomeTopSection from "./homeTopSection/homeTopSection";
import InstitutionsCarousel from "./institutionsCarousel/institutionsCarousel";

const Home = () => {
  return (
    <div className="mt-4">
      <HomeTopSection />
      <HomeMidSection />
      <InstitutionsCarousel />
    </div>
  );
};

export default Home;

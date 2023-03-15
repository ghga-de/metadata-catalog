import HomeMidSection from "./homeMidSection/homeMidSection";
import HomeTopSection from "./homeTopSection/homeTopSection";
import HomePartnersCarousel from "./homePartners/homePartnersCarousel";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="mt-4 mx-auto px-2 px-lg-5">
      <h2 className="fw-bold p-lg-3 pb-0">The German Human Genome-Phenome Archive</h2>
      <Row className="w-100">
        <Col lg={{offset: 6}}>
          <h3 className="fw-bold pb-2 text-quaternary">Metadata Catalog</h3>
        </Col>
      </Row>
      <hr className="mx-lg-3 border-tertiary mb-3 opacity-100" />
      <HomeTopSection />
      <HomeMidSection />
      <HomePartnersCarousel />
    </div>
  );
};

export default Home;

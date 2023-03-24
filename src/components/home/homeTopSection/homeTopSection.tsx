import { Button, Col, Row } from "react-bootstrap";
import germany from "../../../assets/homepage/Germany.svg";
import { Link, NavLink } from "react-router-dom";

const HomeTopSection = () => {
  const paragraph_class = "fs-5 text-md-justify"
  const link_class = "text-secondary"
  return (
    <Col className="px-lg-2">
      <Row className="w-100 mx-0 mb-3 pb-4 pe-lg-4">
        <Col xs={12} sm={"auto"} className="px-lg-5 text-center text-lg-start">
          <img src={germany} alt="Germany" height="400px" className="mw-100" />
        </Col>
        <Col className="p-2 p-lg-5">
          <p className={paragraph_class}>
            The GHGA Metadata Catalog is a discovery platform for human omics data available for research
            that can be requested from one of the GHGA Data Hubs.
          </p>
          <p className={paragraph_class}>
            The public catalog is a first step towards our goal to provide comprehensive data archival services
            for human omics data.
          </p>
          <p className={paragraph_class}>
            The datasets within are annotated following the&nbsp;
            <Link to="/metadata-model" target="_blank" rel="noreferrer" className={link_class}>
              GHGA Metadata Model
            </Link>, which is compatible with the metadata model of the EGA.
          </p>
          <p className={paragraph_class}>
            Please also see further documentation under&nbsp;
            <Link to="/download" target="_blank" rel="noreferrer" className={link_class}>
              “How to get data access”
            </Link>, and&nbsp;
            <Link to="/upload" target="_blank" rel="noreferrer" className={link_class}>
              “Submit data to GHGA”
            </Link>
          </p>
          <div className="text-center">
            <NavLink to="/browse">
              <Button
                variant="secondary"
                className="py-1 fs-5 mt-4 text-white shadow-md-dark"
              >
                <span className="text-uppercase">Get started</span>
              </Button>
            </NavLink>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default HomeTopSection;

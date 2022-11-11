import { Button, Col, Row } from "react-bootstrap";
import germany from "../../../assets/homepage/Germany.svg";
import { NavLink } from "react-router-dom";

const HomeTopSection = () => {
  return (
    <Col className="px-2">
      <Row className="w-100 mx-0 mb-3 pb-5 pe-4">
        <Col className="col-auto ps-5">
          <img src={germany} alt="Germany" height="450px" />
        </Col>
        <Col className="p-5">
          <p className="fw-bold fs-4 mb-4">
            A FAIR Portal for Human Genomics Data with GDPR compliant Access
            Control
          </p>
          <p className="mb-5 fs-5" style={{textAlign: "justify"}}>
            By providing a secure home for their data, GHGA enables data
            controllers to share data safely. GHGA further{" "}
            <span className="text-secondary">
              facilitates discovery and supports the scientific community
            </span>{" "}
            in maximising the value of omics data in genomic medicine and
            research. GHGA uses the{" "}
            <span className="text-secondary">FAIR principles</span> for data
            sharing – making data Findable, Accessible, Interoperable, and
            Reusable – whilst meeting Germany’s and Europe’s data protection
            requirements.
          </p>
          <div className="text-center">
            <NavLink to="/browse">
              <Button
                variant="secondary"
                className="py-2 fs-5 mb-2 text-white shadow-md-dark"
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

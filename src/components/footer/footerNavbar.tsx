import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Button } from "react-bootstrap";
import {
  faCloudDownload,
  faCloudUpload,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/metadata-catalog.png";
import { Link } from "react-router-dom";

const FooterNavbar = () => {
  return (
    <div className="mt-4 pb-2 mw-100 mx-0 bg-primary">
      <div className="mx-auto container pt-3 pb-2 text-center">
        <Row>
          <Col className="border-1 border-end px-3 mx-0 fs-8 text-white">
            <Link to="/">
              <img src={logo} alt="GHGA logo" height="70px" />
            </Link>
            <p className="text-start mt-2 mb-1">
              GHGA Data Portal running in Beta mode
            </p>
            <p className="text-start">
              <Link to="/browse" className="fw-bold text-white">
                Browse Datasets
              </Link>
            </p>
          </Col>
          <Button
            href="https://www.ghga.de/data/data-download"
            target="_blank"
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0"
          >
            <FontAwesomeIcon
              icon={faCloudDownload}
              size="4x"
              className="text-white mt-3 mb-3"
            />
            <p>How to download data</p>
          </Button>
          <Button
            href="https://www.ghga.de/data/data-upload"
            target="_blank"
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0"
          >
            <FontAwesomeIcon
              icon={faCloudUpload}
              size="4x"
              className="text-white mt-3 mb-3"
            />
            <p>Submit data to GHGA</p>
          </Button>
          <Button
            href="/metadata-model"
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0"
          >
            <FontAwesomeIcon
              icon={faFileLines}
              size="4x"
              className="text-white mt-3 mb-3"
            />
            <p>About the GHGA Metadata Model</p>
          </Button>
          <Button
            href="/about-us"
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0"
          >
            <FontAwesomeIcon
              icon={faQuestionCircle}
              size="4x"
              className="text-white mt-3 mb-3"
            />
            <p>About / FAQ</p>
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default FooterNavbar;

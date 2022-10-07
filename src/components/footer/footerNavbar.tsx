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
          <Col className="border-1 border-end px-3 pt-4 mx-0 fs-8 text-white align-items-center">
            <Link to="/">
              <img src={logo} alt="GHGA logo" height="70px" />
            </Link>
          </Col>
          <Button
            href="/download"
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0 rounded-0"
          >
            <FontAwesomeIcon
              icon={faCloudDownload}
              size="4x"
              className="text-white mt-3 mb-3"
            />
            <p>How to download data</p>
          </Button>
          <Button
            href="/upload"
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0 rounded-0"
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
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0 rounded-0"
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
            className="text-white text-decoration-none col border-1 border-end px-3 mx-0 flex-shrink-0 rounded-0"
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

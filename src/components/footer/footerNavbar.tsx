import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Button } from "react-bootstrap";
import {
  faCloudDownload,
  faCloudUpload,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/GHGA_logo.png";
import { Link, NavLink } from "react-router-dom";

const FooterNavbar = () => {
  return (
    <div className="mt-4 pb-2 mw-100 mx-0 bg-primary">
      <div className="mx-auto container pt-3 pb-2 text-center">
        <Row>
          <Col className="border-1 border-end px-3 mx-0" style={{ height: "170px" }}>
            <Link to="/" className="text-tertiary text-decoration-none">
              <div>
                <img src={logo} alt="GHGA logo" height="51px" />
                <hr className="border-tertiary" />
                <div style={{ fontFamily: 'Lexend' }}>
                  <span className="position-relative" style={{ fontSize: "45px", top: "-15px" }}>
                    METADATA
                  </span>
                  <br />
                  <span className="position-relative" style={{ fontSize: "51px", top: "-45px" }}>CATALOG</span>
                </div>
              </div>
            </Link>
          </Col>
          <NavLink to="/download" end={true} className="text-white text-decoration-none col border-1 border-end p-0 m-0 flex-shrink-0 ">
            <Button
              className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0"
            >
              <FontAwesomeIcon
                icon={faCloudDownload}
                size="4x"
                className="text-white mt-3 mb-3"
              />
              <p className="text-white text-decoration-none">How to Get Data Access<br />&nbsp;</p>
            </Button>
          </NavLink>
          <NavLink to="/upload" end={true} className="text-white text-decoration-none col border-1 border-end p-0 m-0 flex-shrink-0 ">
            <Button
              className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0"
            >
              <FontAwesomeIcon
                icon={faCloudUpload}
                size="4x"
                className="text-white mt-3 mb-3"
              />
              <p className="text-white text-decoration-none">How to Submit Data<br />&nbsp;</p>
            </Button>
          </NavLink>
          <NavLink to="/metadata-model" end={true} className="text-white text-decoration-none col border-1 border-end p-0 m-0 flex-shrink-0 ">
            <Button
              className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0"
            >
              <FontAwesomeIcon
                icon={faFileLines}
                size="4x"
                className="text-white mt-3 mb-3"
              />
              <p className="text-white text-decoration-none">About the GHGA<br />Metadata Model</p>
            </Button>
          </NavLink>
          <NavLink to="/about-us" end={true} className="text-white text-decoration-none col border-1 border-end p-0 m-0 flex-shrink-0 ">
            <Button
              className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0"
            >
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size="4x"
                className="text-white mt-3 mb-3"
              />
              <p className="text-white text-decoration-none">About / FAQ<br />&nbsp;</p>
            </Button>
          </NavLink>
        </Row>
      </div>
    </div>
  );
};

export default FooterNavbar;

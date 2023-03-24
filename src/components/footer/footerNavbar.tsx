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
  const left_link_classes =
    "text-white text-decoration-none col border-end border-bottom border-bottom-sm-0 p-0 m-0 flex-shrink-0 col-6 col-sm-3";
  const right_link_classes = left_link_classes + " border-end-0 border-end-sm";

  return (
    <div className="mt-5 mt-sm-4 pb-2 mw-100 mx-0 bg-primary">
      <div className="mx-auto container pt-0 pt-sm-3 pb-lg-2 text-center">
        <Row style={{ marginBottom: "-50px" }}>
          <Col className="order-lg-1 mb-4 mb-lg-0">
            <Row className="border-start-sm">
              <NavLink to="/download" end={true} className={left_link_classes}>
                <Button className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0">
                  <FontAwesomeIcon
                    icon={faCloudDownload}
                    size="4x"
                    className="text-white mt-3 mb-3"
                  />
                  <p className="text-white text-decoration-none">
                    How to Get Data Access
                    <br />
                    &nbsp;
                  </p>
                </Button>
              </NavLink>
              <NavLink to="/upload" end={true} className={right_link_classes}>
                <Button className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0">
                  <FontAwesomeIcon
                    icon={faCloudUpload}
                    size="4x"
                    className="text-white mt-3 mb-3"
                  />
                  <p className="text-white text-decoration-none">
                    How to Submit Data
                    <br />
                    &nbsp;
                  </p>
                </Button>
              </NavLink>
              <NavLink
                to="/metadata-model"
                end={true}
                className={left_link_classes}
              >
                <Button className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    size="4x"
                    className="text-white mt-3 mb-3"
                  />
                  <p className="text-white text-decoration-none">
                    About the GHGA
                    <br />
                    Metadata Model
                  </p>
                </Button>
              </NavLink>
              <NavLink to="/faq" end={true} className={right_link_classes}>
                <Button className="w-100 h-100 rounded-0 py-0 px-3 m-0 border-0">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    size="4x"
                    className="text-white mt-3 mb-3"
                  />
                  <p className="text-white text-decoration-none">
                    FAQ
                    <br />
                    &nbsp;
                  </p>
                </Button>
              </NavLink>
            </Row>
          </Col>
          <Col xs={12} lg={3} className="px-0 me-lg-2 order-lg-0">
            <div className="px-xl-3 mx-0">
              <Link to="/" className="text-tertiary text-decoration-none h-100">
                <div>
                  <img src={logo} alt="GHGA logo" height="51px" />
                  <Row className="justify-content-center w-100">
                    <Col xs={8} sm={6} md={5} lg={12}>
                      <hr className="border-tertiary w-100" />
                    </Col>
                  </Row>
                  <div style={{ fontFamily: "Lexend" }}>
                    <span
                      className="position-relative"
                      style={{ fontSize: "45px", top: "-15px" }}
                    >
                      METADATA
                    </span>
                    <br />
                    <span
                      className="position-relative"
                      style={{ fontSize: "51px", top: "-45px" }}
                    >
                      CATALOG
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterNavbar;

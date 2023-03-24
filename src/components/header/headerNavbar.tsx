import React from "react";
import logo from "../../assets/GHGA_logo_clean.png";
import { Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderSearchbar from "./headerSearchbar";

const HeaderNavbar = () => {
  const activePageStyle =
    "btn btn-secondary p-0 h-100 m-0 mx-1 mx-xl-2 px-0 px-xl-2 pt-1 text-white";
  const inactivePageStyle =
    "btn btn-primary p-0 h-100 m-0 mx-1 mx-xl-2 px-0 px-xl-2 pt-1 text-white";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="p-0 d-flex w-100"
    >
      <Row className="w-100 mx-0 justify-content-between">
        <Col xs={12} sm={6} lg={3} className="text-center text-sm-start px-0">
          <Navbar.Brand className="ps-xxl-5 me-0">
            <NavLink to="/" end>
              <Button className="p-1 m-0 ps-xl-3">
                <div className="d-flex align-items-center">
                  <div
                    style={{ width: "80%" }}
                    className="flex-fill pe-2 me-2 border-end border-tertiary"
                  >
                    <img src={logo} alt="GHGA logo" height="35px" />
                  </div>
                  <div
                    className="text-tertiary h-100"
                    style={{ fontFamily: "Lexend" }}
                  >
                    <span
                      className="position-relative"
                      style={{ fontSize: "18px", top: "5px" }}
                    >
                      METADATA
                    </span>
                    <br />
                    <span
                      className="fs-5 position-relative"
                      style={{ top: "-5px" }}
                    >
                      CATALOG
                    </span>
                  </div>
                </div>
              </Button>
            </NavLink>
          </Navbar.Brand>
        </Col>
        <Col
          className="px-0 px-md-2 d-flex justify-content-end"
          xs={12}
          sm={2}
          lg={9}
          xl={9}
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border border-2 border-tertiary text-white mb-1 w-100 w-sm-auto"
          />
          <Navbar.Offcanvas
            id="responsive-navbar-nav"
            className="justify-content-center"
            placement="end"
          >
            <Row className="justify-content-between">
              <Col xs={12} lg={9}>
                <Nav
                  className="justify-content-center"
                  style={{ height: "36px", whiteSpace: "nowrap" }}
                >
                  <NavLink
                    to="/"
                    end={true}
                    className={({ isActive }) =>
                      isActive ? activePageStyle : inactivePageStyle
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/browse"
                    className={({ isActive }) =>
                      isActive ? activePageStyle : inactivePageStyle
                    }
                  >
                    Browse Data
                  </NavLink>
                  <NavLink
                    to="/download"
                    className={({ isActive }) =>
                      isActive ? activePageStyle : inactivePageStyle
                    }
                  >
                    Access Data
                  </NavLink>
                  <NavLink
                    to="/upload"
                    className={({ isActive }) =>
                      isActive ? activePageStyle : inactivePageStyle
                    }
                  >
                    Submit Data
                  </NavLink>
                  <NavLink
                    to="/metadata-model"
                    className={({ isActive }) =>
                      isActive ? activePageStyle : inactivePageStyle
                    }
                  >
                    Metadata Model
                  </NavLink>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      isActive ? activePageStyle : inactivePageStyle
                    }
                  >
                    FAQ
                  </NavLink>
                </Nav>
              </Col>
              <Col
                className="justify-content-center d-flex pe-xl-2 pe-xxl-5"
                xs={12}
                lg={3}
                xl={3}
              >
                <HeaderSearchbar />
              </Col>
            </Row>
          </Navbar.Offcanvas>
        </Col>
      </Row>
    </Navbar>
  );
};

export default HeaderNavbar;

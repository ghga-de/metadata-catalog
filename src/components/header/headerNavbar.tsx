import React from "react";
import logo from "../../assets/GHGA_logo_clean.png";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HeaderNavbar = () => {
  const activePageStyle =
    "btn btn-secondary p-0 h-100 m-0 mx-2 px-2 pt-1 text-white";
  const inactivePageStyle =
    "btn btn-primary p-0 h-100 m-0 mx-2 px-2 pt-1 text-white";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      className="p-0"
    >
      <div className="container px-5 d-flex">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-2 text-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand className="p-0 col-2">
            <Button href="/" className="p-1 m-0">
              <div className="d-flex align-items-center">
                <div style={{ width: "80%" }} className="flex-fill pe-2 me-2 border-end border-lightgreen">
                  <img src={logo} alt="GHGA logo" height="35px" />
                </div>
                <div className="text-lightgreen h-100" style={{fontFamily: 'Lexend'}}>
                  <span className="position-relative" style={{ fontSize: "18px", top: "5px" }}>
                    METADATA
                  </span>
                  <br />
                  <span className="fs-5 position-relative" style={{top: "-5px"}}>CATALOG</span>
                </div>
              </div>
            </Button>
          </Navbar.Brand>
          <Nav
            className="justify-content-center col-8"
            style={{ height: "36px" }}
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
              Browse
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? activePageStyle : inactivePageStyle
              }
            >
              About
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? activePageStyle : inactivePageStyle
              }
            >
              Download
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) =>
                isActive ? activePageStyle : inactivePageStyle
              }
            >
              Upload
            </NavLink>
            <NavLink
              to="/metadata-model"
              className={({ isActive }) =>
                isActive ? activePageStyle : inactivePageStyle
              }
            >
              Metadata Model
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HeaderNavbar;

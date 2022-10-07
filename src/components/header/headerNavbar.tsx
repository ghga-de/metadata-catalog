import React from "react";
import logo from "../../assets/metadata-catalog.png";
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
              <img src={logo} alt="GHGA logo" className="w-100" />
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

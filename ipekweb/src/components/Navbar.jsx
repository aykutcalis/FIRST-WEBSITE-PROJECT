import React, { useEffect } from "react";
import imlogo from "../assets/imlogo.png";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "../styles/Navbar_Small.css";
import { useMediaQuery, Menu, MenuItem } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/NavbarXs.css";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openControl = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isXs = useMediaQuery("(max-width: 599.95px)");

  const [show, setShow] = useState(false);
  const controlNavBar = () => {
    if (window.scrollY > 75) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize[0]);

  return (
    <div>
      {isXs ? (
        <div>
          {" "}
          <div className={`navbarXs ${show && "nav_small"}`}>
            <div className={`main ${show && "main_small"}`}>
              <div className="imgDiv navbarLogoLinkDiv">
                <Link to="/" className="navbarLogoLink">
                  <img src={imlogo} />
                </Link>
              </div>
              <div className="mainLinkXs">
                <div className="searchIconXs">
                  {" "}
                  <button className="searchIconImgXs">
                    <SearchIcon fontSize="small" />
                  </button>
                </div>

                <div className="reOrderIconDiv">
                  <button className="reorderIconButton" onClick={handleClick}>
                    <ReorderIcon
                      className="reorderIcon"
                      sx={{ bgcolor: "#e6eaed" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <NavLink
                  className="listItem"
                  to="/services"
                  activeClassName="active"
                >
                  SERVİSLER
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="listItem" to="/projects">
                  PROJELER
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="listItem" to="/about">
                  HAKKIMIZDA
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="listItem" to="/courses">
                  KURSLAR
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="listItem" to="/contact">
                  İLETİŞİM
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="listItem" to="/menu">
                  BLOG
                </NavLink>
              </MenuItem>
            </Menu>
          </div>
        </div>
      ) : (
        <div className={`navbar ${show && "nav_small"} `}>
          <div className={`main ${show && "main_small"}`}>
            <div className="imgDiv navbarLogoLinkDiv">
              <Link to="/" className="navbarLogoLink">
                <img src={imlogo} />
              </Link>
            </div>
            <div className="mainLink">
              <div className="searchIcon">
                {" "}
                <button className="searchIconImg">
                  <SearchIcon fontSize="small" />
                </button>
              </div>

              <div className="">
                <NavLink to="/services" activeClassName="active">
                  SERVİSLER
                </NavLink>
                <NavLink to="/projects" activeClassName="active">
                  PROJELER
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                  HAKKIMIZDA
                </NavLink>
                <NavLink to="/courses" activeClassName="active">
                  KURSLAR
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                  İLETİŞİM
                </NavLink>
                <NavLink to="/menu" activeClassName="active">
                  BLOG
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

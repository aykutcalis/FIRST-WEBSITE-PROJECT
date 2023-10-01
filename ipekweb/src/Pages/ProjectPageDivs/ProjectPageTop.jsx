import React from "react";
import projectPageTop from "../../assets/ProjectPageImage/projecttop.jpeg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const ProjectPageTop = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");

  const containerStyle = {
    backgroundImage: `url(${projectPageTop})`,
    padding: isXs ? "0 10px" : "0 50px",
  };

  const h2Style = {
    marginBottom: "10px",
    width: "95%",
  };

  return (
    <div>
      <div style={containerStyle} className="TopMain">
        <h2 style={h2Style}>PROJELER</h2>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Projeler</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

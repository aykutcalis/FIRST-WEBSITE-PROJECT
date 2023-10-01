import React from "react";
import ServicesImage from "../../assets/ServicesImages/servis.jpg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const ServicesTop = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  const h2Style = {
    marginBottom: "10px",
    width: "95%",
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ServicesImage})`,
          padding: isXs ? "0 10px" : "0 50px",
        }}
        className="TopMain"
      >
        <h2 style={h2Style}>
          HİZMETLER 
        </h2>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Hizmetler</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

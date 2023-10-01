import React from "react";
import productionPageTop from "../../assets/ProductionPageImages/Productiontop.jpg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const ProductionPageTop = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  const h2Style = {
    marginBottom: "10px",
    width: "95%",
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${productionPageTop})`,
          padding: isXs ? "0 10px" : "0 50px",
        }}
        className="TopMain"
      >
        <h2 style={h2Style}>ÜRETİM</h2>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Üretim</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

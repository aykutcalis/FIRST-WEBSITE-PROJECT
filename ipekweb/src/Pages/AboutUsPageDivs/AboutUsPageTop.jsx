import React from "react";
import AboutUsTop from "../../assets/AboutUsPageImages/AboutUsTop.jpg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const AboutUsPageTop = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  const h2Style = {
    marginBottom: "10px",
    width: "95%",
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${AboutUsTop})`,
          padding: isXs ? "0 10px" : "0 50px",
        }}
        className="TopMain"
      >
        <h2 style={h2Style}> 
          HI FOOD TECH| Hi Food Tech – Biz Endüstriyel Boru Tesisatlarında Uzmanız  
        </h2>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Hakkımızda</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

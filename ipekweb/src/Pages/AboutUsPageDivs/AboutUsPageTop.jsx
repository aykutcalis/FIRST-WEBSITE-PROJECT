import React from "react";
import AboutUsTop from "../../assets/AboutUsPageImages/AboutUsTop.jpg";
import { Link } from "react-router-dom";

export const AboutUsPageTop = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${AboutUsTop})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="ServicesTopMain"
      >
        <h1>
          HI FOOD| Hi Food Tech – Biz Endüstriyel Boru Tesisatlarında Uzmanız
        </h1>
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

import React from "react";
import ServicesImage from "../../assets/ServicesImages/servis.jpg";
import { Link } from "react-router-dom";

export const ServicesTop = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ServicesImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="ServicesTopMain"
      >
        <h1>
          HİZMETLER | Mühendislik Projeleri, Endüstriyel Bakım Hizmetleri ve
          Çevre Projeleri - Freetilizer
        </h1>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Servisler</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

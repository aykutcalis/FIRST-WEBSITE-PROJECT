import React from "react";
import projectPageTop from "../../assets/ProjectPageImage/ProjectTop.jpg";
import { Link } from "react-router-dom";

export const ProjectPageTop = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${projectPageTop})`,
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

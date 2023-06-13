import React from "react";
import ProjeImage from "../../assets/engineering.jpg";
import IndustryImage from "../../assets/endustri.png";
import GeriImage from "../../assets/geridonusum.jpg";
import { Link, Outlet } from "react-router-dom";

export const HomePageServices = () => {
  return (
    <div>
      <div className="mainHomeDiv">
        <div
          className="mainPage"
          style={{ backgroundImage: `url(${ProjeImage})` }}
        >
          <h3 className="homeTextContent">MÜHENDİSLİK PROJELERİ</h3>
          <Link className="moreLinkButton" to="/services/engineering-project">
            DAHA FAZLASINI KEŞFET
          </Link>
        </div>
        <div
          className="mainPage"
          style={{ backgroundImage: `url(${IndustryImage})` }}
        >
          <h3 className="homeTextContent">SANAYİ BAKIM</h3>
          <Link className="moreLinkButton" to="/services/ındustrial-project">
            DAHA FAZLASINI KEŞFET
          </Link>
        </div>
        <div
          className="mainPage"
          style={{ backgroundImage: `url(${GeriImage})` }}
        >
          <h3 className="homeTextContent">GERİ DÖNÜŞÜM</h3>
          <Link className="moreLinkButton" to="/services/environment-project">
            DAHA FAZLASINI KEŞFET
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

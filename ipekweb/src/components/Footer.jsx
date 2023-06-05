import React from "react";

import "../styles/Footer.css";
import "../styles/Home.css";
import { FirstDiv } from "../Pages/FooterDivs/FirstDiv";
import { SecondDiv } from "../Pages/FooterDivs/SecondDiv";
import FooterMenuDiv from "../Pages/FooterDivs/FooterMenuDiv";

export const Footer = () => {
  return (
    <div className="footer">
      <FirstDiv />
      <SecondDiv />
      <FooterMenuDiv />
      <div className="text-center p-3" style={{ backgroundColor: "white)" }}>
        © 2023 İpek Mühendislik - Tüm Hakları Saklıdır.
      </div>
    </div>
  );
};

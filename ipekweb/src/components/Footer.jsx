import React from "react";

import "../styles/Footer.css";
import "../styles/Home.css";
import { FooterMap } from "../Pages/FooterDivs/FooterMap";
import FooterMenuDiv from "../Pages/FooterDivs/FooterMenuDiv";
import { FooterPageCustomers } from "../Pages/FooterDivs/FooterPageCustomers";

export const Footer = () => {
  return (
    <div className="footer">
      <FooterPageCustomers />
      <FooterMap />
      <FooterMenuDiv />
      <div className="text-center p-3" style={{ backgroundColor: "white)" }}>
        © 2023 HI FOOD - Tüm Hakları Saklıdır.
      </div>
    </div>
  );
};

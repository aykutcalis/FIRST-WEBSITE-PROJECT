import React from "react";
import { ServicesTop } from "../Pages/Services/ServicesTop";
import "../styles/Services.css";
import "../styles/Home.css";

import { ServicesCards } from "../Pages/Services/ServicesCards";
import { ServicesYoutube } from "../Pages/Services/ServicesYoutube";

export const Services = () => {
  return (
    <div>
      <ServicesTop />
      <ServicesCards />
      <ServicesYoutube />
    </div>
  );
};

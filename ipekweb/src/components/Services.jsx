import React from "react";
import { ServicesTop } from "../Pages/Services/ServicesTop";
import "../styles/Services.css";
import { ServicesCards } from "../Pages/Services/ServicesCards";

export const Services = () => {
  return (
    <div>
      <ServicesTop />
      <ServicesCards />
    </div>
  );
};

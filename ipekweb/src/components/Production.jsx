import React from "react";
import "../styles/Courses.css";
import "../styles/Home.css";
import "../styles/Services.css";
import { ProductionPageTop } from "../Pages/ProductionPageDİvs/ProductionPageTop";
import { ProductionMain } from "../Pages/ProductionPageDİvs/ProductionMain";

export const Production = () => {
  return (
    <div>
      <ProductionPageTop/>
      <ProductionMain />
    </div>
  );
};

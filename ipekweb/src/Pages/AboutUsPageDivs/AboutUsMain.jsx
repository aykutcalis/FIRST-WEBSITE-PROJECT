import React from "react";
import { responsiveFontSizes, useMediaQuery } from "@mui/material";
import { Tabs } from "antd";
import { MainAboutUs } from "./AboutUsContents/MainAboutUs";
import { Testimonials } from "./AboutUsContents/Testimonials";
import { HumanResources } from "./AboutUsContents/HumanResources";
import { ProductionResources } from "./AboutUsContents/ProductionResources";
import { Certification } from "./AboutUsContents/Certification";
import { Recrietment } from "./AboutUsContents/Recrietment";

export const AboutUsMain = () => {
  const tabItems = [
    { id: "1", label: "Hakkımızda", component: <MainAboutUs /> },
    { id: "2", label: "Görüşler ", component: <Testimonials /> },
    { id: "3", label: "İnsan Kaynakları", component: <HumanResources /> },
    { id: "4", label: "Üretim Kaynakları", component: <ProductionResources /> },
    { id: "5", label: "Sertifikasyon", component: <Certification/> },
    { id: "6", label: "İşe Alım", component: <Recrietment /> },
  ];
  const isXs = useMediaQuery("(max-width: 599.95px)");

  return (
    <div>
      <Tabs
        color="#3f444"
        defaultActiveKey="1"
        centered
        items={tabItems.map((item) => ({
          label: item.label,
          key: item.id,
          children: item.component,
        }))}
        style={{ fontSize: isXs ? "10px" : "16px" }}
      />
    </div>
  );
};

import React from "react";
import { responsiveFontSizes, useMediaQuery } from "@mui/material";
import { Tabs } from "antd";
import { ProjectAll } from "./ProjectAll";
import { ProjectEngineering } from "./ProjectEngineering";
import { ProjectIndustry } from "./ProjectIndustry";
import { ProjectEnvironment } from "./ProjectEnvironment";

export const ProjectMain = () => {
  const tabItems = [
    { id: "1", label: "Hepsi", component: <ProjectAll /> },
    {
      id: "2",
      label: "Mühendislik Projeleri",
      component: <ProjectEngineering />,
    },
    { id: "3", label: "Endüstriyel Bakım", component: <ProjectIndustry /> },
    { id: "4", label: "Geri Dönüşüm", component: <ProjectEnvironment /> },
  ];
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div className={isXs ? "DivMainXs" : "DivMain"}>
        <h1 className="divTitle">PROJELER</h1>
        <div className="SecondDivMainText">
          <p>
            Mühendislik, Endüstriyel Bakım ve Çevre alanlarındaki ana ulusal ve
            uluslararası projelerimiz keşfedin.
          </p>
        </div>
      </div>

      <Tabs
        style={{ background: "#dfdfdf" }}
        defaultActiveKey="1"
        centered
        items={tabItems.map((item) => ({
          label: item.label,
          key: item.id,
          children: item.component,
        }))}
      />
    </div>
  );
};

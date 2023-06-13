import React from "react";
import "../styles/Home.css";
import { HomePageAboutUs } from "../Pages/HomePageDivs/HomePageAboutUs";
import { HomePageProjects } from "../Pages/HomePageDivs/HomePageProjects";
import { HomePageArticles } from "../Pages/HomePageDivs/HomePageArticles";
import { HomePageTestimonials } from "../Pages/HomePageDivs/HomePageTestimonials";
import { HomePageServices } from "../Pages/HomePageDivs/HomePageServices";

export const Home = () => {
  return (
    <div>
      <HomePageServices />
      <HomePageAboutUs />
      <HomePageProjects />
      <HomePageArticles />
      <HomePageTestimonials />
    </div>
  );
};

import React from "react";
import coursesPageTop from "../../assets/CoursesPageImages/coursestop.jpg";
import { Link } from "react-router-dom";

export const CoursesPageTop = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${coursesPageTop})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
        className="ServicesTopMain"
      >
        <h1>KURSLAR | Eğitim Kursları</h1>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Kurslar</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

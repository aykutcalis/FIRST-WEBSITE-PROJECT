import React from "react";
import { Link } from "react-router-dom";

export const BlogPageTop = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          overflow: "hidden",
        }}
        className="ServicesTopMain"
      >
        <h1>BLOG</h1>
        <div className="Breadcrumb">
          <Link to="/">
            <strong>Home Page</strong>
          </Link>
          <p>/</p>
          <Link href="">
            <strong>Blog</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

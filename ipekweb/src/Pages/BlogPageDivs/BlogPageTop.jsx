import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export const BlogPageTop = () => {
  const isXs = useMediaQuery("(max-width: 599.95px)");
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          padding: isXs ? "0 10px" : "0 50px",
          height: "25vh",
          width: "100%",
          marginTop: "90px",
        }}
        className="TopMain"
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

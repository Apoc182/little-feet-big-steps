import React from "react";
import HomePatternSVG from "../../../assets/homePattern.svg";
import { useBlogPosts } from "../../../contexts/BlogPostsContext"; // Import the hook
import { Typography } from "@mui/material";
import Map from "./Map";
import "../styles/style.css";

function Header() {
  const blogPosts = useBlogPosts();
  return (
    <>
      <div className="svg-container">
        <HomePatternSVG className="home-pattern-svg" />
        <div className="header-container">
          <Typography variant="h1" color="initial" className="header">
            Little Feet Big Steps
          </Typography>
          <Typography variant="h4" color="initial" className="sub-header">
            This is a blog of adventures undertaken by a very little girl
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Header;

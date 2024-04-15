import React from "react";
import HomePatternSVG from "../../../assets/homePattern.svg";
import { useBlogPosts } from "../../../contexts/BlogPostsContext"; // Import the hook
import { Typography } from "@mui/material";
import Map from "./Map";

function Header() {
  const blogPosts = useBlogPosts();
  return (
    <>
      <div className="svg-container">
        <HomePatternSVG className="home-pattern-svg" />
        <div className="header-container">
          <Typography
            variant="h1"
            color="initial"
            className="header"
            style={{
              fontSize: "4rem",
              fontWeight: 700,
            }}
          >
            Little Feet Big Steps
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            className="sub-header"
            style={{
              fontSize: "1.7rem",
              fontWeight: "400",
              marginTop: "1rem",
            }}
          >
            This is a blog of adventures undertaken by a very little girl
          </Typography>
        </div>
        {/* <Map
          blogPosts={blogPosts}
          onMarkerClick={(location) => alert(`Clicked: ${location.title}`)}
          sx={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-30%, 50%)",
          }}
        /> */}
      </div>
    </>
  );
}

export default Header;

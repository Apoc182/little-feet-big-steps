import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/blogpost.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

function BlogPageHeader(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem",
          fontFamily: "'Roboto'",
          fontSize: "2rem",
        }}
      >
        {props.id - 1 == 0 ? (
          <Button variant="outlined" disabled startIcon={<ArrowBackIcon />} style={{ textTransform: "capitalize" }}>
            Previous Blog
          </Button>
        ) : (
          <Link to={`/post/${props.id - 1}`} style={{ textDecoration: "none", color: "black" }}>
            <Button variant="outlined" className="blog-nav-btn" startIcon={<ArrowBackIcon />}>
              Previous Blog
            </Button>
          </Link>
        )}

        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h3 style={{ fontWeight: 800, margin: 0, fontSize: "2rem" }}>Little Feet Big Steps</h3>
        </Link>

        {props.id == props.blogPostLength ? (
          <Button variant="outlined" style={{ textTransform: "capitalize" }} disabled endIcon={<ArrowForwardIcon />}>
            Next Blog
          </Button>
        ) : (
          <Link to={`/post/${props.id + 1}`} style={{ textDecoration: "none", color: "black" }}>
            <Button variant="outlined" className="blog-nav-btn" endIcon={<ArrowForwardIcon />}>
              Next Blog
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}

export default BlogPageHeader;

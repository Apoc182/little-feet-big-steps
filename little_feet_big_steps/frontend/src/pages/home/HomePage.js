import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "../../contexts/BlogPostsContext"; // Import the hook
import Map from "./components/Map"; // Adjust this import according to your file structure
import Header from "./components/Header";

import "./styles/style.css";
import { Grid, Paper } from "@mui/material";

function HomePage() {
  const blogPosts = useBlogPosts();
  console.log(blogPosts);

  return (
    <>
      <Header />
      <div className="map_blog-container">
        <Map blogPosts={blogPosts} onMarkerClick={(location) => alert(`Clicked: ${location.title}`)} />

        {/* blogs archive section */}
        {/* <div style={{ overflowY: "scroll", height: "200px", border: "1px solid #ccc", margin: "20px 0", padding: "10px" }}> */}
        <Paper
          elevation={3}
          sx={{
            marginTop: "1rem",
            padding: "0 1rem 1rem",
          }}
        >
          <Grid container spacing={2}>
            {blogPosts.map((post) => (
              <Grid item xs={12} md={6} lg={4} key={post.id}>
                <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "black" }}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "0.75rem 1.5rem",
                      fontFamily: "Roboto",
                    }}
                  >
                    <h2 sx={{ fontWeight: "700", fontSize: "2rem", margin: "0" }}>{post.title}</h2>
                    {/* <div dangerouslySetInnerHTML={{ __html: post.body }}></div> */}
                    <div sx={{ fontWeight: "400", marginLeft: 0 }}>{post.body}</div>
                  </Paper>
                </Link>
              </Grid>
            ))}
            {/* </div> */}
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default HomePage;

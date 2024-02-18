import Map from "../components/Map"; // Adjust this import according to your file structure
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBlogPosts } from '../contexts/BlogPostsContext'; // Import the hook

function HomePage(){

    const blogPosts = useBlogPosts();




    return (<div>
        <header style={{ textAlign: "center", margin: "20px 0" }}>
        <h1>Little Feet Big Steps</h1>
        </header>
        <p style={{ textAlign: "center" }}>
        This is a blog of adventures undertaken by a very little girl.
        </p>
        <Map blogPosts={blogPosts} onMarkerClick={(location) => alert(`Clicked: ${location.title}`)} />
        <div style={{ overflowY: "scroll", height: "200px", border: "1px solid #ccc", margin: "20px 0", padding: "10px" }}>
        {blogPosts.map((post) => (
            <div key={post.id} style={{ marginBottom: "20px" }}>
            <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "blue" }}>
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
            </Link>
            </div>
        ))}
        </div>
    </div>);
}

export default HomePage
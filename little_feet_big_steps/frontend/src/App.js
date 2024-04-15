import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./pages/blog/components/BlogPost";
import HomePage from "./pages/home/HomePage";
import { BlogPostsProvider } from "./contexts/BlogPostsContext"; // Import the provider
import "./App.css";

const App = () => {
  return (
    <BlogPostsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </BlogPostsProvider>
  );
};

export default App;

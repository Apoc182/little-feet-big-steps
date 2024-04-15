import React from "react";
import { useParams } from "react-router-dom";
import { useBlogPosts } from "../../../contexts/BlogPostsContext"; // Import the hook
import ImageCarousel from "./ImageCarousel"; // Import the component
import "../styles/BlogPostStyles.css"; // Import the styles
import "../styles/blogpost.css";
import BlogPageHeader from "./BlogPageHeader";

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post ID from URL parameters
  const blogPosts = useBlogPosts(); // Use the custom hook to get blog posts data
  const post = blogPosts.find((post) => post.id.toString() === id); // Find the blog post by ID
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <BlogPageHeader id={post.id} blogPostLength={blogPosts.length} />
      <div className="blog-content-container">
        <h2 className="blog-content-title">{post.title}</h2>
        <div className="blog-content-description">{post.body}</div>
      </div>
      {post.images.length > 0 && <ImageCarousel images={post.images} />}
    </div>
  );
};

export default BlogPost;

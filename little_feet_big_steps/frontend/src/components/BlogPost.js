import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogPosts } from '../contexts/BlogPostsContext'; // Import the hook

const BlogPost = () => {
    const { id } = useParams(); // Get the blog post ID from URL parameters
    const blogPosts = useBlogPosts(); // Use the custom hook to get blog posts data
    const post = blogPosts.find(post => post.id.toString() === id); // Find the blog post by ID

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            { post.images && post.images.map((image) => {
              <img src={image}></img>
            })}
        </div>
    );
};

export default BlogPost;

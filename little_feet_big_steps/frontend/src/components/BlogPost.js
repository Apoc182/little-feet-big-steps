import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogPosts } from '../contexts/BlogPostsContext'; // Import the hook
import ImageCarousel from './ImageCarousel'; // Import the component
import './BlogPostStyles.css'; // Import the styles

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
            <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
            {post.images.length > 0 && ( 
                <ImageCarousel images={post.images}/>
            )}
        </div>
    );
};

export default BlogPost;

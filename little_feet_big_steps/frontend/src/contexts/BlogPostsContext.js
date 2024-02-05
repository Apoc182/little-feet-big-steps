import React, { createContext, useState, useContext, useEffect } from 'react';

const BlogPostsContext = createContext();

export const useBlogPosts = () => useContext(BlogPostsContext);

export const BlogPostsProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('/api/blogposts/')
            .then(response => response.json())
            .then(data => setBlogPosts(data));
    }, []);

    return (
        <BlogPostsContext.Provider value={blogPosts}>
            {children}
        </BlogPostsContext.Provider>
    );
};

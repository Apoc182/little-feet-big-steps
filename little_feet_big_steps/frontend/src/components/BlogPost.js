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

    console.log(post.images)

    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
            {post.images.length > 0 ? (
                post.images.map((image, index) => (
                // Assuming `image` can be used as a unique key; otherwise, use `index` or another unique identifier
                <img key={image} src={image} alt={`Image ${index}`} />
                ))
            ) : null}
        </div>
    );
};

export default BlogPost;

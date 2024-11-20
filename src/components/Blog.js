import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'What Hiking Teaches Us About Problem-Solving in Web Development',
    excerpt: 'Hiking and coding have more in common than you think—both involve patience, persistence, and overcoming challenges one step at a time.',
    thumbnail: 'https://example.com/hiking-problem-solving-thumbnail.jpg',
  },
  {
    title: 'Nature-Inspired Design: Enhancing User Experience',
    excerpt: 'Learn how incorporating elements from nature can enhance user experience and bring a calming aesthetic to web design.',
    thumbnail: 'https://example.com/nature-design-thumbnail.jpg',
  },
  {
    title: 'APIs in the Wild: Streamlining Digital Adventures',
    excerpt: 'Explore how APIs are like trails connecting different parts of a digital forest, streamlining workflows and enhancing capabilities.',
    thumbnail: 'https://example.com/apis-in-wild-thumbnail.jpg',
  },
];

const Blog = () => {
  return (
    <div className="blog-container" id="blog">
      <h2 className="blog-title">Reflections on Tech & Trails</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.thumbnail} alt={post.title} className="blog-thumbnail" />
            <div className="blog-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

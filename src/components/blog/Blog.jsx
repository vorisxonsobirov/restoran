import React from 'react';
import '../main.css';
import DataBlog from './DataBlog';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Блог Ресторана</h1>
      <div className='blog_fex'>
        {DataBlog.map(post =>   (
          <div key={post.id} className="post-container">
            <img src={post.image} alt="" />
            <h2>{post.name}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const BlogRoutes = ({ posts }) => {
  return (
    <Routes>
      <Route path="/" element={<BlogList posts={posts} />} />
      <Route path="/category/:category" element={<BlogList posts={posts} />} />
      <Route path="/tag/:tag" element={<BlogList posts={posts} />} />
      <Route path="/:id" element={<BlogPost posts={posts} />} />
    </Routes>
  );
};

export default BlogRoutes;
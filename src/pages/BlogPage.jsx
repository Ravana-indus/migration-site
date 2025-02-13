import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { mockPosts } from '../data/mockPosts';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import BlogNav from '../components/BlogNav';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogNav />
      <div className="bg-white py-8">
        <Routes>
          <Route index element={<BlogList posts={mockPosts} />} />
          <Route path="category/:category" element={<BlogList posts={mockPosts} />} />
          <Route path="tag/:tag" element={<BlogList posts={mockPosts} />} />
          <Route path=":id" element={<BlogPost posts={mockPosts} />} />
        </Routes>
      </div>
    </div>
  );
};

export default BlogPage;
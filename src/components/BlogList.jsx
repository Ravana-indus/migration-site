import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-800 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600">Latest updates and insights about studying abroad</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link 
            key={blog._id} 
            to={`/blog/${blog.slug}`}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {blog.coverImage && (
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={blog.coverImage} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <time>{new Date(blog.createdAt).toLocaleDateString()}</time>
                  {blog.category && (
                    <>
                      <span>•</span>
                      <span>{blog.category}</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt || blog.content.substring(0, 150) + '...'}
                </p>
                <div className="flex items-center gap-3">
                  {blog.author?.avatar && (
                    <img 
                      src={blog.author.avatar} 
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div className="text-sm">
                    <p className="text-gray-900 font-medium">{blog.author?.name}</p>
                    <p className="text-gray-500">{blog.author?.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
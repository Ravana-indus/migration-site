import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`/api/blogs/${slug}`);
      if (!response.ok) {
        throw new Error('Blog not found');
      }
      const data = await response.json();
      setBlog(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching blog:', error);
      setIsLoading(false);
      navigate('/blog'); // Redirect to blog list if post not found
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

  if (!blog) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Cover Image */}
      {blog.coverImage && (
        <div className="aspect-[2/1] w-full overflow-hidden rounded-xl mb-8">
          <img 
            src={blog.coverImage} 
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <time>{new Date(blog.createdAt).toLocaleDateString()}</time>
          {blog.category && (
            <>
              <span>•</span>
              <span>{blog.category}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          {blog.title}
        </h1>
        {blog.excerpt && (
          <p className="text-xl text-gray-600 mb-6">{blog.excerpt}</p>
        )}
        
        {/* Author */}
        <div className="flex items-center gap-4 border-t border-b border-gray-200 py-6">
          {blog.author?.avatar && (
            <img 
              src={blog.author.avatar} 
              alt={blog.author.name}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            <p className="text-gray-900 font-medium">{blog.author?.name}</p>
            <p className="text-gray-500">{blog.author?.role}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
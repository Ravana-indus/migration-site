import React, { useState, useMemo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogList = ({ posts }) => {
  const { category, tag } = useParams();
  const location = useLocation();
  
  // Get unique categories and tags
  const categories = useMemo(() => 
    [...new Set(posts.map(post => post.category))],
    [posts]
  );
  
  const tags = useMemo(() => 
    [...new Set(posts.flatMap(post => post.tags || []))],
    [posts]
  );

  // Filter posts based on category or tag
  const filteredPosts = useMemo(() => {
    if (category) {
      return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
    }
    if (tag) {
      return posts.filter(post => post.tags?.some(t => t.toLowerCase() === tag.toLowerCase()));
    }
    return posts;
  }, [posts, category, tag]);

  // Create breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ravanamigration.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://ravanamigration.com/blog'
      },
      ...(category ? [{
        '@type': 'ListItem',
        position: 3,
        name: category,
        item: `https://ravanamigration.com/blog/category/${category}`
      }] : []),
      ...(tag ? [{
        '@type': 'ListItem',
        position: 3,
        name: `Tag: ${tag}`,
        item: `https://ravanamigration.com/blog/tag/${tag}`
      }] : [])
    ]
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ravana Migration Blog',
    description: 'Expert insights about studying in Germany, visa processes, and education opportunities for Sri Lankan students',
    url: 'https://ravanamigration.com/blog',
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.imageUrl,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Blog | Ravana Migration - Sri Lanka's No 1 German Visa Consultant</title>
        <meta name="description" content="Expert articles about studying in Germany, visa processes, and education opportunities for Sri Lankan students. Get insights from experienced consultants." />
        <meta name="keywords" content="study in germany blog, german student visa, sri lanka education abroad, germany university guide" />
        <link rel="canonical" href="https://ravanamigration.com/blog" />
        
        <meta property="og:title" content="Germany Education & Visa Guide | Ravana Migration Blog" />
        <meta property="og:description" content="Expert insights about studying in Germany. Tips for visa applications, university selection, and more." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://ravanamigration.com/blog" />
        
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            </li>
            {(category || tag) && (
              <>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900">
                  {category || `Tag: ${tag}`}
                </li>
              </>
            )}
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            {category ? `${category} Articles` : 
             tag ? `Articles tagged "${tag}"` : 
             'Latest Articles'}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert insights about studying in Germany
          </p>

          {/* Category Navigation */}
          <nav className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-full text-sm ${
                !category && !tag ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Posts
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                to={`/blog/category/${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm ${
                  category === cat.toLowerCase() ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </header>

        {/* Post Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Link 
                to={`/blog/${post.id}`}
                className="block aspect-w-16 aspect-h-9"
              >
                <img
                  src={post.imageUrl}
                  alt={`Cover image for ${post.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </Link>
              <div className="p-6 flex-grow flex flex-col">
                <Link 
                  to={`/blog/${post.id}`}
                  className="block"
                >
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                </Link>
                <footer className="flex items-center justify-between text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>{post.author}</span>
                </footer>
              </div>
            </article>
          ))}
        </div>

        {/* Popular Tags */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-light mb-4">Popular Topics</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Link
                key={tag}
                to={`/blog/tag/${tag.toLowerCase()}`}
                className={`px-3 py-1 rounded-full text-sm ${
                  location.pathname === `/blog/tag/${tag.toLowerCase()}` 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
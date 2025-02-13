import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import WhyGermany from '../WhyGermany';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Special case for WhyGermany page
  if (post.isSpecialPage && post.content === 'whygermany') {
    return <WhyGermany />;
  }

  // Get related posts based on category and tags
  const relatedPosts = posts
    .filter(p => 
      p.id !== post.id && 
      (p.category === post.category || 
       p.tags?.some(tag => post.tags?.includes(tag)))
    )
    .slice(0, 3);

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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `https://ravanamigration.com/blog/category/${post.category.toLowerCase()}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `https://ravanamigration.com/blog/${post.id}`
      }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ravana Migration',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ravanamigration.com/img/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ravanamigration.com/blog/${post.id}`
    }
  };

  // Generate FAQ Schema if post has FAQs
  const faqSchema = post.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Ravana Migration - Sri Lanka's No 1 German Visa Consultant`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords?.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.lastModified || post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags?.map(tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to={`/blog/category/${post.category.toLowerCase()}`} className="text-gray-500 hover:text-gray-700">
                {post.category}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">{post.title}</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
          {post.imageUrl && (
            <div className="h-64 md:h-96">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                loading="eager"
                width="800"
                height="400"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6 md:p-12">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 border-b border-gray-100 pb-6">
                <time dateTime={post.date} className="text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-sm">{post.author}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown 
                components={{
                  h1: ({node, ...props}) => <h1 className="text-4xl font-light mb-6" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-normal mt-12 mb-6" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-medium mt-8 mb-4" {...props} />,
                  p: ({node, ...props}) => <p className="mb-6 text-gray-600 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="mb-6 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="mb-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-600" {...props} />,
                  hr: ({node, ...props}) => <hr className="my-12 border-gray-100" {...props} />,
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* FAQ Section if exists */}
            {post.faqs && (
              <div className="mt-12 border-t pt-8">
                <h2 className="text-3xl font-light mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-6">
                      <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-gray-200"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-light mb-6">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map(related => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="group block"
                    >
                      <img
                        src={related.imageUrl}
                        alt={related.title}
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <h3 className="text-lg font-medium group-hover:text-primary">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Website URL
  siteUrl: 'https://ravanamigration.com',
  // Output path for sitemap
  outputPath: path.join(__dirname, 'public', 'sitemap.xml'),
  // Core routes
  routes: [
    '/',
    '/about',
    '/contact',
    '/whygermany',
    '/blog',
    '/services'
  ],
  // Blog categories to include
  categories: [
    'visa-guide',
    'study-in-germany',
    'education',
    'student-life',
    'application-process',
    'cost-of-living',
    'career-guidance'
  ],
  // Important keywords for URL targeting
  keywords: [
    'study-in-germany',
    'german-student-visa',
    'sri-lanka-student-visa',
    'germany-education',
    'free-education-germany'
  ]
};

// Generate last modified date
const getLastMod = () => {
  const date = new Date();
  return date.toISOString();
};

// Create sitemap XML content
const generateSitemap = () => {
  const lastMod = getLastMod();
  
  // XML header with image namespace
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  sitemap += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  // Add static routes with priorities
  config.routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${config.siteUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${lastMod}</lastmod>\n`;
    // Home page gets highest priority
    const priority = route === '/' ? '1.0' : 
                    route === '/whygermany' ? '0.9' :
                    route === '/blog' ? '0.8' : '0.7';
    sitemap += `    <priority>${priority}</priority>\n`;
    // Main pages change less frequently
    const changefreq = route === '/' ? 'daily' :
                      route === '/blog' ? 'weekly' : 'monthly';
    sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemap += '  </url>\n';
  });

  // Add category pages
  config.categories.forEach(category => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${config.siteUrl}/blog/category/${category}</loc>\n`;
    sitemap += `    <lastmod>${lastMod}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.7</priority>\n';
    sitemap += '  </url>\n';
  });

  // Add blog posts if they exist
  try {
    const blogPosts = require('./src/data/mockPosts.js');
    if (blogPosts) {
      // Track all tags for tag pages
      const tags = new Set();
      
      blogPosts.forEach(post => {
        // Add post URL
        sitemap += '  <url>\n';
        sitemap += `    <loc>${config.siteUrl}/blog/${post.id}</loc>\n`;
        sitemap += `    <lastmod>${post.lastModified || post.date}</lastmod>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.6</priority>\n';
        
        // Add post image
        if (post.imageUrl) {
          sitemap += '    <image:image>\n';
          sitemap += `      <image:loc>${post.imageUrl}</image:loc>\n`;
          sitemap += `      <image:title>${post.title}</image:title>\n`;
          sitemap += '    </image:image>\n';
        }
        sitemap += '  </url>\n';

        // Collect tags
        if (post.tags) {
          post.tags.forEach(tag => tags.add(tag.toLowerCase()));
        }
      });

      // Add tag pages
      tags.forEach(tag => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${config.siteUrl}/blog/tag/${tag}</loc>\n`;
        sitemap += `    <lastmod>${lastMod}</lastmod>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        sitemap += '    <priority>0.6</priority>\n';
        sitemap += '  </url>\n';
      });
    }
  } catch (error) {
    console.log('No blog posts found to add to sitemap');
  }
  
  sitemap += '</urlset>';
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  const sitemap = generateSitemap();
  
  // Ensure directory exists
  const dir = path.dirname(config.outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(config.outputPath, sitemap);
  console.log(`Sitemap generated at: ${config.outputPath}`);
};

// Execute
writeSitemap();
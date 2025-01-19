const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Your website URL
  siteUrl: 'https://your-website.com',
  // Output path for sitemap
  outputPath: path.join(__dirname, 'public', 'sitemap.xml'),
  // Add routes that should be included in sitemap
  routes: [
    '/',
    '/about',
    '/contact',
    '/products',
    // Add more routes as needed
  ],
  // Optional: Add dynamic routes or paths from your data
  // dynamicRoutes: products.map(product => `/product/${product.id}`),
};

// Generate last modified date
const getLastMod = () => {
  const date = new Date();
  return date.toISOString();
};

// Create sitemap XML content
const generateSitemap = () => {
  const lastMod = getLastMod();
  
  // XML header
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add static routes
  config.routes.forEach(route => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${config.siteUrl}${route}</loc>\n`;
    sitemap += `    <lastmod>${lastMod}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '  </url>\n';
  });
  
  // Add dynamic routes if they exist
  if (config.dynamicRoutes) {
    config.dynamicRoutes.forEach(route => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${config.siteUrl}${route}</loc>\n`;
      sitemap += `    <lastmod>${lastMod}</lastmod>\n`;
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.8</priority>\n';
      sitemap += '  </url>\n';
    });
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
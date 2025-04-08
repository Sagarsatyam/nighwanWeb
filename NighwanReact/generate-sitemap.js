const Sitemap = require('react-router-sitemap').default;
const router = require('./src/App').default; // Adjust the path to your main router file

new Sitemap(router)
  .build('https://www.nighwantech.com')
  .save('./public/sitemap.xml');

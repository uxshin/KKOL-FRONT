/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.kkol-studio.com/",
  generateRobotsTxt: true,
  // projects와 studio만 포함
  include: ["/projects", "/studio"],
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.kkol-studio.com/",
  generateRobotsTxt: true,
  // works와 studio만 포함
  include: [
    "/projects",
    "/studio",
    // 동적 라우트 예시: '/projects/1', '/projects/2' 등은 별도 설정 필요
  ],
};

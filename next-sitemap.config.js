module.exports = {
  siteUrl: "https://bruh.inedible.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api", "/error"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/api", "/error"],
      },
    ],
  },
};

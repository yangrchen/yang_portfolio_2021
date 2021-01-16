module.exports = {
  siteMetadata: {
    title: "yang_portfolio",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

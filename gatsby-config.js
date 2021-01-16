const path = require('path');
module.exports = {
  siteMetadata: {
    title: "yang_portfolio",
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      }
    }
  ],
};

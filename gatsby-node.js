const path = require("path");

exports.onCreatePage = async ( { page, actions }) => {
    const { createPage } = actions;

    console.log("Page - ", page.path)
    if (page.path.match(/^\about/)) {
        createPage({
            path: "/about",
            matchPath: "/about/*",
            component: path.resolve(`src/pages/about.js`),
        })
    }
}
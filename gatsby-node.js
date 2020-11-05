/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })




exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const contributorTemplate = require.resolve(`./src/templates/contributor.js`);
    const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            excerpt(format: PLAIN)
            frontmatter {
              username
            }
          }
        }
      }
    }
  `)



  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/contributor/${node.frontmatter.username.toLowerCase()}`,
        component: contributorTemplate,
        context: {
          // additional data can be passed via context
          username: node.frontmatter.username,
        },
      })
  })



}
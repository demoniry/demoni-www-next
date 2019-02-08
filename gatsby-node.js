const path = require("path")
const pagePathFactory = require("./src/pagePathFactory")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("src/templates/page.jsx")

  return graphql(`
    {
      allFile {
        edges {
          node {
            name
            childMarkdownRemark {
              id
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allFile.edges.forEach(({ node }) => {
      createPage({
        path: pagePathFactory(node.name),
        component: pageTemplate,
        context: {
          markdownId: node.childMarkdownRemark.id,
        },
      })
    })
  })
}

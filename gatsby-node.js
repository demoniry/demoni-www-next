const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulPage {
            edges {
              node {
                id
                slug
                blocks {
                  ... on ContentfulBlockText {
                    internal {
                      type
                    }
                    text {
                      text
                    }
                  }
                  ... on ContentfulBlockImage {
                    internal {
                      type
                    }
                    image {
                      file {
                        url
                        fileName
                        contentType
                      }
                    }
                    altText
                  }
                  ... on ContentfulBlockTextWithImage {
                    internal {
                      type
                    }
                    childContentfulBlockTextWithImageTextTextNode {
                      text
                    }
                    image {
                      file {
                        url
                        fileName
                        contentType
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.allContentfulPage.edges.forEach(edge => {
        const { id, slug, blocks } = edge.node
        createPage({
          path: `/${slug}/`,
          component: path.resolve('./src/templates/page.js'),
          context: {
            id,
            slug,
            blocks,
          },
        })
      })
    })
    resolve()
  })
}

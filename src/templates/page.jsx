import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <React.Fragment>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <div className="page">
        <h1>{frontmatter.title}</h1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($markdownId: String!) {
    markdownRemark(id: { eq: $markdownId }) {
      frontmatter {
        title
      }
      html
    }
  }
`

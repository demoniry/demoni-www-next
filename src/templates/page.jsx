import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, description } = frontmatter

  return (
    <React.Fragment>
      <SEO title={title} description={description} />

      <div className="page">
        <h1>{title}</h1>
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
        description
      }
      html
    }
  }
`

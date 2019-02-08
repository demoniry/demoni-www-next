import React from "react"
import { graphql } from "gatsby"
import "../styles/globalStyles.scss"
import SEO from "../components/SEO"
import Page from "../components/Page"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, description } = frontmatter

  return (
    <React.Fragment>
      <SEO title={title} description={description} />
      <Page title={title} html={html} />
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

import React from "react"
import { graphql } from "gatsby"
import "../styles/globalStyles.scss"
import SEO from "../components/SEO"
import Page from "../components/Page"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, description } = frontmatter

  // Remove front slashes from anchor links
  const tableOfContents = markdownRemark.tableOfContents.replace(/"\/#/g, '"#')

  return (
    <React.Fragment>
      <SEO title={title} description={description} />
      <Page title={title} html={html} tableOfContents={tableOfContents} />
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
      tableOfContents(pathToSlugField: "fields.emptyString")
    }
  }
`

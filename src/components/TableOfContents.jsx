import React from "react"
import PropTypes from "prop-types"
import "./TableOfContents.scss"

function TableOfContents({ html }) {
  return (
    <nav
      className="TableOfContents"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

TableOfContents.propTypes = {
  html: PropTypes.string.isRequired,
}

export default TableOfContents

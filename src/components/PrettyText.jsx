import React from "react"
import PropTypes from "prop-types"
import "./PrettyText.scss"

function PrettyText({ children, html }) {
  return html ? (
    <div className="PrettyText" dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <div className="PrettyText">{children}</div>
  )
}

PrettyText.propTypes = {
  children: PropTypes.any,
  html: PropTypes.string,
}

export default PrettyText

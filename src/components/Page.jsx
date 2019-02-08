import React from "react"
import PropTypes from "prop-types"
import PrettyText from "./PrettyText"

function Page({ title, html }) {
  return (
    <div>
      <h1>{title}</h1>
      <PrettyText html={html} />
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string,
}

export default Page

import React, { useState } from "react"
import PropTypes from "prop-types"
import Toggle from "./Toggle"
import "./TableOfContents.scss"

function TableOfContents({ html }) {
  if (!html) {
    return null
  }

  const [tocIsVisible, setTocVisibility] = useState(false)

  function toggleTocVisibility() {
    setTocVisibility(!tocIsVisible)
  }

  let tocClassName = "TableOfContents__toc"
  if (!tocIsVisible) tocClassName += " TableOfContents__toc--hidden"

  return (
    <div className="TableOfContents">
      <div className="TableOfContents__toggle">
        <Toggle
          text="Sisällysluettelo"
          onClick={toggleTocVisibility}
          toggled={tocIsVisible}
        />
      </div>
      <nav
        className={tocClassName}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

TableOfContents.propTypes = {
  html: PropTypes.string.isRequired,
}

export default TableOfContents

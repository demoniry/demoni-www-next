import React from "react"
import PropTypes from "prop-types"
import "./Container.scss"

function Container({ forText, children }) {
  let className = "Container"
  if (forText) className += " Container--for-text"

  return (
    <div className={className}>
      <div className="Container__inner">{children}</div>
    </div>
  )
}

Container.propTypes = {
  forText: PropTypes.bool,
  children: PropTypes.any,
}

export default Container

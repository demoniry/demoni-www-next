import React from "react"
import PropTypes from "prop-types"
import "./Toggle.scss"

function Toggle({ text, toggled, onClick }) {
  let className = "Toggle"
  className += toggled ? " Toggle--toggled" : " Toggle--not-toggled"

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

Toggle.propTypes = {
  text: PropTypes.string,
  toggled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Toggle

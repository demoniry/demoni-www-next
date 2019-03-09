import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./Navigation.scss"

function Navigation({ items, isSecondary }) {
  if (!items) return null

  items = items.map(item => {
    const isExternalLink = /(\/\/|:)/.test(item.to)

    const link = isExternalLink ? (
      <a href={item.to} className="Navigation__link Navigation__link--external">
        <span>{item.title}</span>
      </a>
    ) : (
      <Link
        to={item.to}
        className="Navigation__link"
        activeClassName="Navigation__link--active"
      >
        <span>{item.title}</span>
      </Link>
    )

    let className = "Navigation__item"
    if (item.replaceWithLogo) className += " Navigation__item--logo"

    return (
      <li className={className} key={item.title}>
        {link}
      </li>
    )
  })

  let className = "Navigation"
  if (isSecondary) className += " Navigation--secondary"

  return (
    <nav className={className}>
      <ol className="Navigation__list">{items}</ol>
    </nav>
  )
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      replaceWithLogo: PropTypes.bool,
    })
  ).isRequired,
  isSecondary: PropTypes.bool,
}

export default Navigation

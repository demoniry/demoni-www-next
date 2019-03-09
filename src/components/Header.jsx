import React from "react"
import PropTypes from "prop-types"
import Container from "./Container"
import Navigation from "./Navigation"
import "./Header.scss"

function Header({ mainNavigationItems, secondaryNavigationItems }) {
  return (
    <header className="Header">
      <div className="Header__main-navigation">
        <Container>
          <Navigation items={mainNavigationItems} />
        </Container>
      </div>
      {secondaryNavigationItems ? (
        <div className="Header__secondary-navigation">
          <Container>
            <Navigation isSecondary items={secondaryNavigationItems} />
          </Container>
        </div>
      ) : null}
    </header>
  )
}

Header.propTypes = {
  mainNavigationItems: PropTypes.array.isRequired,
  secondaryNavigationItems: PropTypes.array,
}

export default Header

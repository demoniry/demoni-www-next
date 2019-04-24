import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Container from "./Container"
import Toggle from "./Toggle"
import TableOfContents from "./TableOfContents"
import PrettyText from "./PrettyText"
import "./Page.scss"

function Page({ title, html, tableOfContents }) {
  const [tocIsVisible, setTocVisibility] = useState(false)

  function toggleTocVisibility() {
    setTocVisibility(!tocIsVisible)
  }

  let sidebarClassName = "Page__sidebar"
  if (!tableOfContents) {
    sidebarClassName += " Page__sidebar--empty"
  }

  let tocClassName = "Page__toc"
  if (!tocIsVisible) {
    tocClassName += " Page__toc--hidden"
  }

  return (
    <div className="Page">
      <Header
        mainNavigationItems={[
          { title: "Demoni ry", to: "/", replaceWithLogo: true },
          { title: "Yhdistys", to: "/yhdistys/" },
          { title: "Opiskelu", to: "/opiskelu/" },
          { title: "Tapahtumat", to: "/tapahtumat/" },
          { title: "Liikunta", to: "/liikunta/" },
          { title: "Kauppa", to: "https://holvi.com/shop/demoniry/" },
        ]}
        secondaryNavigationItems={[
          { title: "Alasivu", to: "/" },
          { title: "Toinen alasivu", to: "/" },
        ]}
      />
      <Container>
        <div className="Page__layout">
          <div className={sidebarClassName}>
            <div className="Page__toc-toggle">
              <Toggle
                text="Sisällysluettelo"
                toggled={tocIsVisible}
                onClick={toggleTocVisibility}
              />
            </div>
            <div className={tocClassName}>
              <TableOfContents html={tableOfContents} />
            </div>
          </div>
          <div className="Page__content">
            <main>
              <h1 className="Page__title">{title}</h1>
              <PrettyText html={html} />
            </main>
          </div>
        </div>
      </Container>
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string,
  tableOfContents: PropTypes.string,
}

export default Page

import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Container from "./Container"
import PrettyText from "./PrettyText"
import "./Page.scss"

function Page({ title, html }) {
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
      <main className="Page__content">
        <Container forText>
          <h1 className="Page__title">{title}</h1>
          <PrettyText html={html} />
        </Container>
      </main>
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string,
}

export default Page

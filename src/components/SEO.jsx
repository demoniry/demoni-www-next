import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ title, lang, description, image, imageAlt }) {
  const meta = [
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      property: "og:title",
      content: title,
    },
  ]

  if (description) {
    meta.push(
      {
        name: "description",
        content: description,
      },
      {
        property: "og:description",
        content: description,
      }
    )
  }

  if (image) {
    meta.push(
      {
        property: "og:image",
        content: image,
      },
      {
        property: "twitter:image",
        content: image,
      }
    )

    if (imageAlt) {
      meta.push(
        {
          property: "og:image:alt",
          content: imageAlt,
        },
        {
          property: "twitter:image:alt",
          content: imageAlt,
        }
      )
    }
  }

  return <Helmet htmlAttributes={{ lang }} title={title} meta={meta} />
}

SEO.defaultProps = {
  lang: "fi",
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default SEO

module.exports = {
  siteMetadata: {
    title: "Demoni ry",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Demoni ry",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#e9168c",
        icon: "src/images/icon.svg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "content/pages/",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",
  ],
}

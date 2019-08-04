const postCssPresetEnv = require("postcss-preset-env")

module.exports = {
  siteMetadata: {
    title: "Demoni ry",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: { postCssPlugins: [postCssPresetEnv()] },
    },
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: { enableCustomId: true },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
  ],
}

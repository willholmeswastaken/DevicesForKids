module.exports = {
  siteMetadata: {
    title: `Devices for Kids`,
    description: `We want to do something positive to help Leicestershire child… Knightsbridge Estate Agents needs your support for Help Keep Local Leicestershire Children Learning`,
    author: `@willholmeswastaken`,
    mapboxToken: process.env.GATSBY_MAPBOX_API_TOKEN,
    image: 'https://d2g8igdw686xgo.cloudfront.net/53803414_1610111651878972_r.jpeg'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

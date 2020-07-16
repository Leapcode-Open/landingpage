module.exports = {
  siteMetadata: {
    title: `Leapcode`,
    description: `Open Source contribution made easy`,
    author: `@isethu`,
    image:'/og-image.jpeg',
    url: "https://leapcode.io",
    twitterUsername:'@leapcodeio'
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-149692233-2",
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `leapcode`,
        short_name: `leapcode`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["AFont", "AFont-Ex"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/contributors`,
        name: `contributors-pages`,
      },
    },
    `gatsby-transformer-remark`,


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

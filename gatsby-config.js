module.exports = {
  siteMetadata: {
    title: `Leapcode`,
    description: `Leapcode helps you contribute to open source projects right from your first pull request to working on major projects`,
    author: `@isethu`,
    image: "/og-image.png",
    url: "https://leapcode.io",
    twitterUsername: "@leapcodeio",
    siteUrl: "https://leapcode.io",
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-149692233-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `leapcode`,
        short_name: `leapcode`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "default-src":
            "https://www.google-analytics.com/analytics.js https://admin.typeform.com https://leapcode-open.typeform.com https://platform.twitter.com/widgets.js 'self'",
          "script-src":
            " https://platform.twitter.com 'sha256-ct2ul3tmQwO//X+tqlLeQbGOvWcZJ3vBSraHKMPaDOY=' 'sha256-KWO6UOhc/cfhZd4gtXYPu4WkSRPuCQDtCkF/v9OyJB8=' 'sha256-FygwTyyNyFVibb7rPNCVVw98peWZsZk06ALGbPpsPoE=' https://www.google-analytics.com/analytics.js 'sha256-egpbluqkD8NT0bY3bWy7raM9tRIMkfUWboq0Y8KqsFk=' 'sha256-gFwjVoZ8jocp7hP8BFUAJo6HP1OP6rZ+jlawwbTt4dU=' 'sha256-9rDtk+eCfSZMH5bqJEJPRJlsw2Fepy9yQy9Ml4GKtjc=' 'sha256-oZ6gE60ANBQSKT5wZmZOY1oAn6OebcXxdomyRFYB/8Y='  https://admin.typeform.com 'self'",
          "script-src-elem":
            " https://platform.twitter.com 'sha256-ct2ul3tmQwO//X+tqlLeQbGOvWcZJ3vBSraHKMPaDOY=' 'sha256-KWO6UOhc/cfhZd4gtXYPu4WkSRPuCQDtCkF/v9OyJB8=' 'sha256-FygwTyyNyFVibb7rPNCVVw98peWZsZk06ALGbPpsPoE=' https://www.google-analytics.com/analytics.js 'sha256-egpbluqkD8NT0bY3bWy7raM9tRIMkfUWboq0Y8KqsFk=' 'sha256-gFwjVoZ8jocp7hP8BFUAJo6HP1OP6rZ+jlawwbTt4dU=' 'sha256-9rDtk+eCfSZMH5bqJEJPRJlsw2Fepy9yQy9Ml4GKtjc=' 'sha256-oZ6gE60ANBQSKT5wZmZOY1oAn6OebcXxdomyRFYB/8Y='  https://admin.typeform.com 'self'",
          "style-src": "'unsafe-inline' 'self'",
          "style-src-elem": "'unsafe-inline' 'self'",
          "font-src": "'self'",
          "img-src":
            "https://www.google-analytics.com https://builders.mozilla.community/assets/img/mozilla-builders-logo.png data: 'self'",
          "frame-src":
            "https://platform.twitter.com https://platform.twitter.com/widgets.js https://leapcode-open.typeform.com 'self'",
          "object-src": "'none'",
          "media-src": "'self'",
          "connect-src": "https://www.google-analytics.com 'self'",
          "manifest-src": "'self'",
          "form-action": "https://syndication.twitter.com 'self'",
          "worker-src": "'self'",
          "base-uri": "'self'",
          "prefetch-src":
            "https://www.google-analytics.com/analytics.js https://www.google-analytics.com https://platform.twitter.com/widgets.js 'self'",
        },
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
    `gatsby-plugin-offline`,
  ],
}

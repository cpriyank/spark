/* eslint-disable @typescript-eslint/camelcase */
'use strict'

module.exports = {
  pathPrefix: "/spark",
  siteMetadata: {
    title: 'Spark',
    description: '🏡 Where the Light Is',
    siteUrl: 'https://cpriyank.github.io',
    author: {
      name: 'cpriyank',
      url: 'https://cpriyank.gitlab.io',
      email: '5903604+cpriyank@users.noreply.github.com',
    },
    social: {
      github: 'https://github.com/cpriyank',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://cpriyank.github.io`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cpriyank`,
        short_name: `cpriyank.github.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.,
      },
    },
    // {
      // resolve: `gatsby-plugin-google-analytics`,
      // options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      // },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
  ],
}

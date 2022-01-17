module.exports = {
  siteMetadata: {
    name: `jaffamonkey`,
    description: `Quality engineering and process improvements in the project pipelines.`,
    keywords: [`quality`, `testing`, `automation`],
    siteUrl: `https://gatsbythemeterminal.gatsbyjs.io`,
    siteImage: `https://condescending-jepsen-e639a6.netlify.app/images/logo.png`,
    profileImage: `https://condescending-jepsen-e639a6.netlify.app/images/logo.png`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [
          {
            name: 'posts',
            dir: 'posts',
          },
          {
            name: 'projects',
            dir: 'projects',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76055934-8',
      },
    },
  ],
}

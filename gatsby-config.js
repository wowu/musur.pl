module.exports = {
  siteMetadata: {
    title: 'Karol Musur - Strony internetowe, boty i aplikacje.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
}

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:400,600,700`,
          `Rock Salt`
        ],
      }
    }
  ],
}

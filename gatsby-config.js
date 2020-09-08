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
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          test: /\.svg$/,
          include: `${__dirname}/src/assets/icons/`,
        }
      }
    }
  ],
}

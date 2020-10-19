require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400,600,700,800`, `Rock Salt`],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          test: /\.svg$/,
          include: `${__dirname}/src/assets/icons/`,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        useNameForId: false,
      },
    },
    `gatsby-plugin-antd`,
  ],
}

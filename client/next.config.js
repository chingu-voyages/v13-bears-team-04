const withSass = require("@zeit/next-sass")
require("dotenv").config()

module.exports = withSass({
  env: {
    API_URL: process.env.API_URL,
  },
})

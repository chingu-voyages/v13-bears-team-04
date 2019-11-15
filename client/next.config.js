const withSass = require("@zeit/next-sass")

module.exports = withSass({
  env: {
    API_URL_DEV: "http://localhost:3000",
  },
})

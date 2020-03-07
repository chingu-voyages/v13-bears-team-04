// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSass = require("@zeit/next-sass");

require("dotenv").config();

const globalSass = [
  "sass/abstracts/_variables.scss",
  "sass/abstracts/_mixins.scss",
  "sass/abstracts/_functions.scss",
];

module.exports = withSass({
  // this makes our SASS variables global eliminating the
  // need to import the files in other .scss files
  webpack: config => {
    config.module.rules.push({
      enforce: "pre",
      test: /\.scss$/,
      loader: "sass-resources-loader",
      options: {
        // eslint-disable-next-line no-undef
        resources: globalSass,
      },
    });

    return config;
  },
});

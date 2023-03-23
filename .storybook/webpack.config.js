/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  // Make whatever fine-grained changes you need
  // const imageRule = config.module.rules.find(
  //   (rule) => rule.test && rule.test.test(".svg")
  // );
  // imageRule.exclude = /\.svg$/;
  //
  // config.module.rules.unshift({
  //   test: /\.svg$/,
  //   enforce: "pre",
  //   use:  ['@svgr/webpack', 'url-loader'],
  // });

  // Return the altered config
  return config;
};

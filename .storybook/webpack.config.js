/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  // console.log(config.module.rules.find((r) => r.oneOf).oneOf[2]);

  return config;
};

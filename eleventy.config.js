module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  return {
    dir: {
      input: 'src',
    },
  };
};

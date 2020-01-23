module.exports = {
  modules: true,
  plugins: {
    autoprefixer: {
      grid: true,
    },
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-preset-env': { browsers: ['Last 2 versions', 'IE >= 10'] },
  },
};

var babelPlugin = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'isIntegeric',
  },
  plugins: [
    babelPlugin(),
  ],
};

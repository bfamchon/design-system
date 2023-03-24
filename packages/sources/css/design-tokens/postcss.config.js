const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssCombineMediaQuery = require('postcss-combine-media-query');
const postcssDiscardComments = require('postcss-discard-comments');
const postcssRem = require('postcss-rem');
const postcssPrettify = require('postcss-prettify');

let plugins = [
  postcssImport,
  autoprefixer,
  postcssDiscardComments,
  postcssCombineMediaQuery,
  postcssCombineDuplicatedSelectors,
  postcssRem({ baseline: 16 }),
  postcssPrettify
];

module.exports = {
  plugins
};

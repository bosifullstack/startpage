const sveltePreprocess = require("svelte-preprocess");

module.exports.preprocess = sveltePreprocess({
  scss: {
    includePaths: ["src"],
    data: `@import 'style/reset.scss';
    @import 'style/theme.scss';
    @import 'style/global.scss';`
  },
  postcss: {
    plugins: [require("autoprefixer")]
  }
});

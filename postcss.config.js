const { uniPostcssPlugin } = require('@dcloudio/uni-cli-shared');
module.exports = {
  plugins: [
    uniPostcssPlugin(),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    require('tailwindcss')({ config: './tailwind.config.js' }),
    require('postcss-class-rename')({
      '.!inline': '.inline',
    }),
  ],
};

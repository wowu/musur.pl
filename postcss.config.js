module.exports = {
  plugins: [
    require('postcss-import')({
      root: __dirname + '/assets/css'
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
}

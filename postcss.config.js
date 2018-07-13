module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
    }),
    require('tailwindcss')('./tailwind.js'),
    process.env.NODE_ENV === 'production'
      ? require('postcss-purgecss')({
          content: ['./index.html']
        })
      : function() {
        return []
      }
  ]
}

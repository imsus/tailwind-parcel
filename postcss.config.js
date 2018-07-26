class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

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
          content: ['./index.html'],
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ["html", "js"]
            }
          ]
        })
      : function() {
        return []
      }
  ]
}

const htmlmin = require("html-minifier")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// BEAUTIFY CODE
const beautifyHTML = require('js-beautify').html;
const beautifyCSS = require('js-beautify').css;

const beautifySettings = {
  "indent_size": "2",
  "indent_char": " ",
  "end_with_newline": false,
};



// MINIFY CSS
const CleanCSS = require("clean-css");


module.exports = eleventyConfig => {

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"))

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"))

    // Minify our HTML
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if ( outputPath.endsWith(".html") )
        {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
            return minified
        }
        return content
    })

    eleventyConfig.addPlugin(syntaxHighlight);

    // Collections
    eleventyConfig.addCollection('blog', collection => {

        const blogs = collection.getFilteredByTag('blog')

        for( let i = 0; i < blogs.length; i++ ) {

            const prevPost = blogs[i - 1]
            const nextPost = blogs[i + 1]

            blogs[i].data["prevPost"] = prevPost
            blogs[i].data["nextPost"] = nextPost

        }

        return blogs.reverse()

    })

    // Layout aliases
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

    // Include our static assets
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("js")
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("robots.txt")

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'site',
            output: 'dist',
            includes: 'includes',
            data: 'globals'
        }
    }

}

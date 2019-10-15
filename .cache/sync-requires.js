const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-template-postagem-js": hot(preferDefault(require("/home/gislaine/react-gatsby-blog-test/src/template/postagem.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/gislaine/react-gatsby-blog-test/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/gislaine/react-gatsby-blog-test/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/gislaine/react-gatsby-blog-test/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/gislaine/react-gatsby-blog-test/src/pages/page-2.js")))
}


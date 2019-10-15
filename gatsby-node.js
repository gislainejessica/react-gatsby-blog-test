const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(() => {
    const blogPostTemplate = path.resolve(`src/templates/postagem.js`)

    resolve(
      graphql(
        `{
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  title
                  path
                  date
                }
              }
            }
          }
        }`
      )
    ).then( (res) => {
        if (res.erros) {
          reject(res.erros)
        }
        console.log(res.data)
    })

  })
  



}

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const post = path.resolve("src/template/postagem.js")

    return graphql(
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
      ).then ( res => {
        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({node}) => {
          const { frontmatter } = node
          createPage({
            path:frontmatter.path,
            component:post,
            context:{
              path:frontmatter.path,
            }
          }) 
        })
        console.log(res.data)
    })
}

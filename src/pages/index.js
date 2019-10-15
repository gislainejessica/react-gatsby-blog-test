import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const { allmarkdownRemark } = data
  const { edges } = allmarkdownRemark   
   return(
    <Layout>
      <SEO title="Home" />
      <div>
        { edges.map( (item) => {
            console.log(item)

           const { node } = item
           const { frontmatter } = node
          return (
            <Link to={`/${frontmatter.path}`} key={frontmatter.path}>
              <h1>{frontmatter.title}</h1>
            </Link>
          )
        })
        }
      </div>
      <Link to="/page-2/"> Go to page 2 </Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  { 
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
  }
`


export default IndexPage

import React from "react"
import { Link , graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const { html, frontmatter} = data.markdownRemark
  const { title, date } = frontmatter

  return(
    <Layout>
      <SEO title="Blog" />
      <h1> { title } </h1>
      <p> { date } </p>
      <div dangerouslySetInnerHTML={{__html:html}}>
      </div>
      <Link to="/page-2"> Vai pro 2</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
 query PostPage($path:String!){
    markdownRemark (frontmatter: {path:{eq:$path}}) {
      html
      frontmatter{
        date
        path
        title
      }
    }
  }
`

export default IndexPage

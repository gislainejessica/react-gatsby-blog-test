import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1> Segundo blog sobre Gatsby </h1>
    <p> Bem vinda </p>
    <Link to="/">  Home Breaking </Link>
  </Layout>
)

export default SecondPage

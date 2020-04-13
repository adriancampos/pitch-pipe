import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BoardSquare from "../components/board-square"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BoardSquare/>
  </Layout>
)

export default IndexPage

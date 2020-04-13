import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Board from "../components/board"

const SecondPage = () => (
  <Layout>
    <SEO title="Page all" />
    <p>Welcome to page 2</p>
    <Board/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
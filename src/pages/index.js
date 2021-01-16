import * as React from "react";
import Layout from '../components/layout/layout';
import { Router, Link } from "@reach/router";
import AboutPage from "../pages/about"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Testing Home</h1>
      <div>Hello hello</div>
      <Router basepath="/">
        <AboutPage path="/about"></AboutPage>
      </Router>
    </Layout>
  )
}

export default IndexPage

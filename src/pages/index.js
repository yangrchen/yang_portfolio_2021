import * as React from "react";
import Layout from '../components/layout/layout';
import { Router } from "@reach/router";
import AboutPage from "../pages/about"
import Image from "../components/image/image"
import { useStaticQuery, graphql } from "gatsby";
import "../styles/home.css";

const IndexPage = () => {
  return (
    <Layout>
      <div id="wrapper" className="lg:flex pl-10 lg:p-16 break-words leading-relaxed md:space-x-16 merriweather">
        <Image id="profile-image" className="md:pl-24 lg:pl-0" data={useStaticQuery(graphql`
    query MyQuery {
  file(relativePath: {eq: "yang.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
      }
    }
  }
}`
        )}
        ></Image>
        <div class="lg:w-1/4 self-center pt-8 lg:pt-0 pb-8 lg:pb-0">
          <h1 className="text-xl lg:text-2xl font-bold">Hiya, hiya, I'm Yang.</h1>
          <br></br>
          <div className="text-sm lg:text-base">
            <p>I'm a rising senior at UNC-Chapel Hill who loves learning a lot of everything. Software developer, sketch artist, boxer, fitness enthusiast, I live my life trying to challenge myself in order to connect my body and mind to every experience I come across.</p>
            <br></br>
            <p>I enjoy working with other people to find what drives them as well. At UNC, I volunteer as a boxing trainer in Carolina Boxing, helping to bring the art and ethics of Olympic boxing to the surrounding community. I also work as an undergraduate teaching assistant in UNC's COMP110 course which brings the fundamental first steps in computer science to hundreds of students every semester.</p>
            <br></br>
            <p>Every day I am learning to redefine who I am, to explore myself through love, purpose and meaning, and to find balance at the center of everything I am passionate about.</p>
          </div>
        </div>
      </div>
      <Router basepath="/">
        <AboutPage path="/about"></AboutPage>
      </Router>
    </Layout>
  )
}

export default IndexPage

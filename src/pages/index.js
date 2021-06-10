import * as React from "react";
import Layout from '../components/layout/layout';
import Img from "gatsby-image";
import { graphql } from "gatsby";

// CSS
import "../styles/home.css";


export default ({ data }) => {
  return (
    <Layout>
      <div id="wrapper" className="lg:flex lg:pt-16 break-words leading-relaxed lg:space-x-16 pt-serif">
        <div id="profile-image" className="mx-8 md:mx-24 lg:mx-8 mt-6 lg:mt-0">
          <Img fluid={data.file.childImageSharp.fluid}></Img>
        </div>
        <div className="lg:w-1/4 self-center pt-8 mx-14 md:mx-36 lg:mx-0 lg:pt-0 pb-6 lg:pb-0">
          <h1 className="text-2xl lg:text-2xl font-bold">Hiya, hiya, I'm Yang.</h1>
          <br></br>
          <div className=" text-sm font-thin text-gray-800">
            <p>I'm a rising senior at UNC-Chapel Hill who loves learning a lot of everything. Software developer, sketch artist, boxer, fitness enthusiast, I live my life trying to challenge myself in order to connect my body and mind to every experience I come across.</p>
            <br></br>
            <p>I enjoy working with other people to find what drives them as well. At UNC, I volunteer as a boxing trainer in Carolina Boxing, helping to bring the art and ethics of Olympic boxing to the surrounding community. I also work as an undergraduate teaching assistant in UNC's COMP110 course which brings the fundamental first steps in computer science to hundreds of students every semester.</p>
            <br></br> <p>Every day I am learning to redefine who I am, to explore myself through love, purpose and meaning, and to find balance at the center of everything I am passionate about.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProfileImageQuery {
    file(relativePath: { eq: "yang.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`
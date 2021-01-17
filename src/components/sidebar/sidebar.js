import * as React from "react";
import { Link } from "gatsby";
import Image from "../image/image"
import { useStaticQuery, graphql } from "gatsby";

const Sidebar = () => {
    // Can later replace with 'children' later to generalize
    return (
        <main className="pt-20 ml-16 lg:h-screen pt-serif lg:space-y-16 hidden lg:block">
            <Image data={useStaticQuery(graphql`
    query IconQuery {
  file(relativePath: {eq: "yang_signature_sm.png"}) {
    childImageSharp {
      fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
      }
    }
  }
}`
            )}
            ></Image>
            <div>
                <nav>
                    <ul>
                        <li className="hover:underline">
                            <Link to={`/about`}><span>Resume</span></Link>
                        </li>
                        <li className="hover:underline">
                            <Link to={`/`}><span>Projects</span></Link>
                        </li>
                        <li className="hover:underline">
                            <Link to={'/'}><span>Art</span></Link>
                        </li>
                        <li className="hover:underline">
                            <Link to={'/'}><span>Writing</span></Link>
                        </li>
                    </ul>
                </nav>
                <nav className="lg:mt-6 text-sm">
                    <ul className="lg:space-y-2">
                        <li className="hover:underline">
                            <Link to={'/'}><span>About</span></Link>
                        </li>
                        <li className="hover:underline">
                            <Link to={'/'}><span>Contact</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    )
};

export default Sidebar;
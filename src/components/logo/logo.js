import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({style, className}) => {
    const data = useStaticQuery(graphql`
        query {
            mobileImage: file(
                relativePath: { eq: "yang_signature_sm.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 100, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            desktopImage: file(relativePath: { eq: "yang_signature.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }`)
    
    const sources = [
        data.mobileImage.childImageSharp.fluid,
        {
            ...data.desktopImage.childImageSharp.fluid,
            media: `(min-width: 625px)`,
        },
    ]

    return <Img fluid={sources} alt="Yang Logo" style={style} imgStyle = {{ objectFit: 'contain' }} className={className} />
}

export default Logo
import React from "react";
import Img from "gatsby-image";

const Image = ({data, className, id}) => {
    return (
        <div id={id} className={className}>
            <Img fluid={data.file.childImageSharp.fluid} fadeIn={true}></Img>
        </div>
    );
}

export default Image;
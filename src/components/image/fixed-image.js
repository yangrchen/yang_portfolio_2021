import React from "react";
import Img from "gatsby-image";

const FixedImage = ({data, className, id}) => {
    return (
        <div id={id} className={className}>
            <Img fixed={data.file.childImageSharp.fluid} fadeIn={true}></Img>
        </div>
    );
}

export default FixedImage;
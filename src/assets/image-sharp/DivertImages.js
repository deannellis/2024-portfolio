import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query DivertImageQuery {
                    divertImage01: file(
                        relativePath: { eq: "Divert_screencap_01.png" }
                    ) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
            render={(data) => <WrappedComponent {...props} imageData={data} />}
        />
    );
}

export const DivertImage01 = withImageData((props) => (
    <Img fluid={props.imageData.divertImage01.childImageSharp.fluid} />
));

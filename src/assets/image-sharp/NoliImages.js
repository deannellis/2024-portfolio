import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query NoliImageQuery {
                    noliImage01: file(
                        relativePath: { eq: "Noli_screencap_01.png" }
                    ) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    noliImage02: file(
                        relativePath: { eq: "Noli_screencap_02.png" }
                    ) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    noliImage03: file(
                        relativePath: { eq: "Noli_screencap_03.png" }
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

export const NoliImage01 = withImageData((props) => (
    <Img fluid={props.imageData.noliImage01.childImageSharp.fluid} />
));

export const NoliImage02 = withImageData((props) => (
    <Img fluid={props.imageData.noliImage02.childImageSharp.fluid} />
));

export const NoliImage03 = withImageData((props) => (
    <Img fluid={props.imageData.noliImage03.childImageSharp.fluid} />
));

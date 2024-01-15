import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
    return (props) => (
        <StaticQuery
            query={graphql`
                query KamiImageQuery {
                    kamiImage01: file(
                        relativePath: { eq: "Kami_screencap_01.png" }
                    ) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    kamiImage02: file(
                        relativePath: { eq: "Kami_screencap_02.png" }
                    ) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    kamiImage03: file(
                        relativePath: { eq: "Kami_screencap_03.png" }
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

export const KamiImage01 = withImageData((props) => (
    <Img fluid={props.imageData.kamiImage01.childImageSharp.fluid} />
));

export const KamiImage02 = withImageData((props) => (
    <Img fluid={props.imageData.kamiImage02.childImageSharp.fluid} />
));

export const KamiImage03 = withImageData((props) => (
    <Img fluid={props.imageData.kamiImage03.childImageSharp.fluid} />
));

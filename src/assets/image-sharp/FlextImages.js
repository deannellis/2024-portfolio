import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql`
        query FlextImageQuery {
          flextImage01: file(relativePath: { eq: "flext_screencap_01.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          flextImage02: file(relativePath: { eq: "flext_screencap_02.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          flextImage03: file(relativePath: { eq: "flext_screencap_03.png" }) {
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

export const FlextImage01 = withImageData((props) => (
  <Img fluid={props.imageData.flextImage01.childImageSharp.fluid} />
));

export const FlextImage02 = withImageData((props) => (
  <Img fluid={props.imageData.flextImage02.childImageSharp.fluid} />
));

export const FlextImage03 = withImageData((props) => (
  <Img fluid={props.imageData.flextImage03.childImageSharp.fluid} />
));

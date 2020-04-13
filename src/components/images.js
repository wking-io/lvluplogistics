import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = ({ image, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      about: file(relativePath: { eq: "images/about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dedicated: file(relativePath: { eq: "images/dedicated-resource.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trusted: file(relativePath: { eq: "images/trusted-delivery.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      winning: file(relativePath: { eq: "images/winning-team.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Img fluid={data[image].childImageSharp.fluid} className="w-full h-full" {...props} />;
};

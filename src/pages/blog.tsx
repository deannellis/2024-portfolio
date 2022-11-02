import React, { FC } from "react";
import { Link, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";

type PageLayoutProps = {
  data: {
    allMdx: {
      nodes: {
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          slug: string;
        };
      }[];
    };
  };
};

const BlogPage = ({ data }: PageLayoutProps) => {
  return (
    <PageLayout>
      <div className="blog__wrapper fwcc__wrapper">
        <div className="blog fwcc">
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
            <article className="blog__post" key={id}>
              <Link to={`/blog/${frontmatter.slug}`}>
                <h2>{frontmatter.title}</h2>
              </Link>
              <p>{excerpt}</p>
              <span>{frontmatter.date}</span>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 80)
        frontmatter {
          date(fromNow: true)
          slug
          title
        }
      }
    }
  }
`;

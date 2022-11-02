import React, { FC } from "react";
import { graphql, Link } from "gatsby";
import format from "date-fns/format";

import PageLayout from "../../components/PageLayout";
import Icon from "../../components/Icon";

interface BlogPostProps {
    children: React.ReactNode;
    params: {
        frontmatter__slug: string;
    };
    data: {
        allMdx: {
            edges: {
                next: {
                    frontmatter: {
                        title: string;
                        subtitle: string;
                        slug: string;
                    };
                };
                previous: {
                    frontmatter: {
                        title: string;
                        subtitle: string;
                        slug: string;
                    };
                };
                node: {
                    frontmatter: {
                        title: string;
                        subtitle: string;
                        slug: string;
                        date: Date;
                    };
                };
            }[];
        };
    };
}

const BlogPost: FC<BlogPostProps> = ({ data, params, children }) => {
    const currentPost = data.allMdx.edges.filter(
        ({ node }) => node.frontmatter.slug === params.frontmatter__slug
    )[0];
    const { frontmatter } = currentPost.node;
    const { next, previous } = currentPost;
    console.log("test: ", currentPost);
    return (
        <PageLayout>
            <div className="post__wrapper fwcc__wrapper">
                <article className="post fwcc">
                    <h1 className="post__title">{frontmatter.title}</h1>
                    <h2 className="post__subtitle">{frontmatter.subtitle}</h2>
                    <p className="post__date">
                        {format(new Date(frontmatter.date), "dd LLL y")}
                    </p>
                    <div className="post__body">{children}</div>
                </article>
                {(next || previous) && (
                    <section className="post__paging fwcc">
                        <div>
                            {previous && (
                                <Link to={`/blog/${previous.frontmatter.slug}`}>
                                    <span>
                                        <Icon
                                            title="Previous Arrow"
                                            size={16}
                                        />
                                        Previous
                                    </span>
                                    <h3>{previous.frontmatter.title}</h3>
                                </Link>
                            )}
                        </div>
                        <div>
                            {next && (
                                <Link to={`/blog/${next.frontmatter.slug}`}>
                                    <span>
                                        Next
                                        <Icon title="Next Arrow" size={16} />
                                    </span>
                                    <h3>{next.frontmatter.title}</h3>
                                </Link>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </PageLayout>
    );
};

export default BlogPost;

export const query = graphql`
    query {
        allMdx {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        slug
                        subtitle
                    }
                }
                next {
                    frontmatter {
                        title
                        slug
                        subtitle
                    }
                }
                previous {
                    frontmatter {
                        title
                        slug
                        subtitle
                    }
                }
            }
        }
    }
`;

import React, { FC } from "react";
import type { PageProps } from "gatsby";

import PageLayout from "../components/PageLayout";
import ProjectPage from "../components/ProjectPage";
import {
    NoliImage01,
    NoliImage02,
    NoliImage03,
} from "../assets/image-sharp/NoliImages.js";

const buttons = [
    {
        href: "https://nolimodern.com/",
        icon: "leaveSite",
        label: "Visit the Website",
    },
];
const technologies = [
    {
        href: "https://www.gatsbyjs.com/",
        label: "Gatsby",
    },
    {
        href: "https://wordpress.org/",
        label: "WordPress",
    },
    {
        href: "https://www.typescriptlang.org/",
        label: "TypeScript",
    },
    {
        href: "https://reactjs.org/",
        label: "React",
    },
    {
        href: "https://sass-lang.com/",
        label: "Sass",
    },
];

const Noli: FC<PageProps> = (props) => {
    return (
        <PageLayout>
            <ProjectPage
                title="NOLI"
                details="Dot Dash | 2021"
                skills="Front-end Development"
                buttons={buttons}
                technologies={technologies}
                locationPathname={props.location.pathname}
                background={
                    <>
                        <p>
                            NOLI Modern Italian Living is based in Cincinnati,
                            OH, and specializes in custom european design
                            kitchens, cabinets, bathrooms, closets, and living
                            spaces. We worked with NOLI to give them an entirely
                            rebuilt and redesigned, modern website. Our team
                            consisted of a product designer,{" "}
                            <a
                                href="https://www.linkedin.com/in/chris-allen-22904729/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chris Allen
                            </a>{" "}
                            , SEO expert,{" "}
                            <a
                                href="https://www.linkedin.com/in/christmanhersha/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Christman Hersha
                            </a>{" "}
                            , and myself handling front-end development
                        </p>
                        <p>
                            For this project, we went with a headless WordPress
                            approach. Using their exisitng WordPress site to
                            power the content management, we built a headless
                            front-end using Gatsby.{" "}
                        </p>
                    </>
                }
            >
                <div className="project__comp">
                    <aside>
                        <h4>Clean, Minimalist Design</h4>
                        <p>
                            We let NOLI's beautiful product photography take
                            center stage by implemeneting a minimal design,
                            inspired by Scandinavian minimalism.
                        </p>
                    </aside>
                    <NoliImage01 />
                </div>
                <div className="project__comp">
                    <aside>
                        <h4>Best in Class Performance and SEO</h4>
                        <p>
                            Using a headless front-end with Gatsby, we were able
                            to achieve excellent page speeds and performance.
                        </p>
                        <p>
                            I worked closely with our SEO expert to get things
                            dialed in and learned a lot along the way. We
                            implemented many SEO best practices including:
                        </p>
                        <ul>
                            <li>dynamic open graph and meta tags</li>
                            <li>structured data/schema markup</li>
                            <li>semantic HTML tags and attributes</li>
                            <li>dynamic sitemaps and robots.txt files</li>
                        </ul>
                    </aside>
                    <NoliImage02 />
                </div>
                <div className="project__comp">
                    <aside>
                        <h4>Featureful Contact Form</h4>
                        <p>
                            This simple contact form turned out to be a great
                            exercise to implement a number of features:
                        </p>
                        <ul>
                            <li>form validation with reCAPTCHA 2</li>
                            <li>custom event tracking with Google Analytics</li>
                            <li>
                                Mailchimp subscription via their API, using
                                JSONP to avoid CORS issues
                            </li>
                            <li>
                                Submission to GravityForms within WordPress,
                                using their API and OAuth
                            </li>
                        </ul>
                    </aside>
                    <NoliImage03 />
                </div>
            </ProjectPage>
        </PageLayout>
    );
};

export default Noli;

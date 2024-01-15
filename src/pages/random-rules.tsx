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
        href: "https://randomrules.xyz/",
        icon: "leaveSite",
        label: "Visit the Website",
    },
];
const technologies = [
    {
        href: "https://expressjs.com/",
        label: "Express",
    },
    {
        href: "https://vuejs.org/",
        label: "Vue",
    },
    {
        href: "https://pugjs.org/api/getting-started.html",
        label: "Pug",
    },
    {
        href: "https://sass-lang.com/",
        label: "Sass",
    },
];

const RandomRules: FC<PageProps> = (props) => {
    return (
        <PageLayout>
            <ProjectPage
                title="Random Rules"
                details="Dot Dash | 2022"
                skills="Full Stack Development"
                buttons={buttons}
                technologies={technologies}
                locationPathname={props.location.pathname}
                background={
                    <>
                        <p>Random Rules is a curated newsletter</p>
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

export default RandomRules;

import { PageProps } from "gatsby";
import React, { FC } from "react";
import PageLayout from "../components/PageLayout";
import ProjectPage from "../components/ProjectPage";

import scrollGif from "../assets/gifs/divert_scroll.gif";
import { DivertImage01 } from "../assets/image-sharp/DivertImages.js";

const buttons = [
    {
        href: "https://divertinc.com/",
        icon: "leaveSite",
        label: "Visit the Website",
    },
];
const technologies = [
    {
        href: "https://wordpress.org/",
        label: "WordPress",
    },
    {
        href: "https://alpinejs.dev/",
        label: "Alpine.js",
    },
    {
        href: "https://www.advancedcustomfields.com/",
        label: "Advanced Custom Fields",
    },
    {
        href: "https://sass-lang.com/",
        label: "Sass",
    },
];

const Divert: FC<PageProps> = (props) => {
    return (
        <PageLayout>
            <ProjectPage
                title="Divert"
                details="Dot Dash | 2023"
                skills="Full Stack Development"
                buttons={buttons}
                technologies={technologies}
                locationPathname={props.location.pathname}
                background={
                    <>
                        <p>
                            Divert is an impact technology company on a mission
                            to creating advanced technologies and sustainable
                            infrastructure to eliminate wasted food. Divert,
                            anticpating a big press release, wanted a fresh new
                            website. For this project I worked with another
                            developer and a designer to bring this site to
                            production.
                        </p>
                        <p>
                            For this site we built a fully custom WordPress
                            theme. We utilized{" "}
                            <a
                                target="_blank"
                                href="https://www.advancedcustomfields.com/resources/blocks/"
                            >
                                ACF Blocks{" "}
                            </a>
                            to create custom WordPress blocks. This gave us the
                            ability to build custom blocks of cotent that can be
                            used in WordPress's block editor, with custom fields
                            that enable content editors to manage both the
                            content and appeaance of the blocks.
                        </p>
                        <p>
                            We were able to establish modern workflows for
                            WordPress development within a team. We used{" "}
                            <a target="_blank" href="https://localwp.com/">
                                Local
                            </a>{" "}
                            to handle local development enviroments. Using Local
                            along with hosting on WPEngine allowed us to pull
                            down database changes and stay in sync. GitHub
                            Actions were used to deploy changes to staging and
                            production environments. This enabled us to work
                            effetively in parallel.
                        </p>
                    </>
                }
            >
                <div className="project__comp">
                    <aside>
                        <h4>Scroll Animation</h4>
                        <p>
                            I built this custom scroll animation to animate the
                            path of an SVG based on the scroll position.
                        </p>
                    </aside>
                    <div className="project__mobile">
                        <img src={scrollGif} alt="custom scroll animation" />
                    </div>
                </div>
                <div className="project__comp">
                    <aside>
                        <h4>Open Positions Table</h4>
                        <p>
                            This table was built with Alpine.js. Positions are
                            fetched from Divert's management API, and loaded
                            into the table. Alpine handles loading and error
                            states as well as filtering the list of positions.
                        </p>
                    </aside>
                    <DivertImage01 />
                </div>
            </ProjectPage>
        </PageLayout>
    );
};

export default Divert;

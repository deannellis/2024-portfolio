import React, { FC } from "react";
import type { PageProps } from "gatsby";

import PageLayout from "../components/PageLayout";
import ProjectPage from "../components/ProjectPage";
import {
    NoliImage01,
    NoliImage02,
    NoliImage03,
} from "../assets/image-sharp/NoliImages.js";
import gradientGif from "../assets/gifs/random_rules_gradient.gif";

const buttons = [
    // {
    //     href: "https://randomrules.xyz/",
    //     icon: "leaveSite",
    //     label: "Visit the Website",
    // },
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
                        <p>
                            Random Rules was a curated blog and newsletter for
                            news in the world of Web3. This was an internal
                            project within Dot Dash to share interesting news
                            within the world of Web3 and to position Dot Dash as
                            an expert in the emerging space. For me, this was an
                            exciting project as I was able to lead the projects
                            architecture and development. Along with myself, the
                            team consisted of 3 other designers and developers.
                        </p>
                        <p>
                            The site is powered by an{" "}
                            <a href="https://expressjs.com/" target="_blank">
                                Express
                            </a>{" "}
                            backend that server renders views using{" "}
                            <a href="https://pugjs.org/" target="_blank">
                                Pug
                            </a>{" "}
                            templates. For UI elements that need some extra
                            client side functionality, we sprinkled in{" "}
                            <a
                                href="https://vuejs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vue
                            </a>
                            . Content is managed in{" "}
                            <a
                                href="
                            https://www.datocms.com/
                            "
                                target="_blank"
                            >
                                DatoCMS
                            </a>
                            . User authentication uses JWTs and stores user data
                            in a postgres database. We created our own MVC
                            architecture using{" "}
                            <a
                                href="https://sequelize.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sequelize
                            </a>
                            .
                        </p>
                    </>
                }
            >
                <div className="project__video-player">
                    <iframe
                        src="https://player.vimeo.com/video/902985199?color=ffffff"
                        width="700"
                        height="394"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                        title="Kinetic Typography: The Life Aquatic"
                    ></iframe>
                </div>
                <div className="project__comp">
                    <aside>
                        <h4>Dripping with Aesthetic</h4>
                        <p>
                            It was a pleasure bringing to life the designs of{" "}
                            <a
                                href="https://www.linkedin.com/in/chris-allen-22904729/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chris Allen
                            </a>{" "}
                            on this one. With a brand identity that harkens back
                            to the internet of the 90s along with modern
                            brutalist elements, the design really shines.
                        </p>
                        <p>
                            The most satisfying feature to implement was the
                            animated background gradient using WebGL shaders.
                        </p>
                    </aside>
                    <div className="project__mobile">
                        <img
                            src={gradientGif}
                            alt="Random Rules landing page"
                        />
                    </div>
                </div>
            </ProjectPage>
        </PageLayout>
    );
};

export default RandomRules;

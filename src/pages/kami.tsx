import React, { FC } from "react";
import type { PageProps } from "gatsby";

import PageLayout from "../components/PageLayout";
import ProjectPage from "../components/ProjectPage";
import {
    KamiImage01,
    KamiImage02,
    KamiImage03,
} from "../assets/image-sharp/KamiImages.js";
import kamiGif from "../assets/gifs/kami.gif";

const buttons = [
    {
        href: "https://friendly-gates-4fe84c.netlify.app/",
        icon: "leaveSite",
        label: "Visit the Website",
    },
    {
        href: "https://60876ffa514a8d002188dbcf-xctqpzojhf.chromatic.com/",
        icon: "leaveSite",
        label: "Visit the Storybook",
    },
    {
        href: "https://github.com/deannellis/kami",
        icon: "gitHub",
        label: "Visit the GitHub Repo",
    },
];
const technologies = [
    {
        href: "https://reactjs.org/",
        label: "React",
    },
    {
        href: "https://redux.js.org/",
        label: "Redux",
    },
    {
        href: "https://www.typescriptlang.org/",
        label: "TypeScript",
    },
    {
        href: "https://storybook.js.org/",
        label: "Storybook",
    },
    {
        href: "https://www.snowpack.dev/",
        label: "Snowpack",
    },
    {
        href: "https://sass-lang.com/",
        label: "Sass",
    },
];

const Kami: FC<PageProps> = (props) => {
    return (
        <PageLayout>
            <ProjectPage
                title="Kami"
                details="Personal Development | 2021"
                skills="Front-end Development"
                buttons={buttons}
                technologies={technologies}
                locationPathname={props.location.pathname}
                background={
                    <>
                        <p>My goal with kami was threefold:</p>
                        <ul>
                            <li>
                                To create a boilerplate project for future React
                                applications
                            </li>
                            <li>
                                To capture UI patterns I have implemeneted many
                                times and provide a base design system that is
                                easily adpated
                            </li>
                            <li>
                                To try new technologies &amp; best practices
                            </li>
                        </ul>
                    </>
                }
            >
                <div className="project__comp">
                    <aside>
                        <h4>UI Components</h4>
                        <p>
                            Kami features a collection of UI components common
                            to most projects
                        </p>
                    </aside>
                    <KamiImage02 />
                </div>
                <div className="project__comp">
                    <aside>
                        <h4>Storybook</h4>
                        <p>
                            Kami is set up with{" "}
                            <a href="https://storybook.js.org/">Storybook</a>: a
                            great way to build and document UI components.
                        </p>
                    </aside>
                    <KamiImage01 />
                </div>
                <div className="project__comp">
                    <aside>
                        <h4>Themeing</h4>
                        <p>
                            Kami uses css variables to let you adjust the UI
                            theme. Easily change the UI density, accent color,
                            and light/dark mode.
                        </p>
                    </aside>
                    <KamiImage03 />
                </div>
                <div className="project__comp">
                    <aside>
                        <h4>Landing Page Animation</h4>
                    </aside>
                    <div className="project__mobile">
                        <img src={kamiGif} alt="kami intro animation" />
                    </div>
                </div>
            </ProjectPage>
        </PageLayout>
    );
};

export default Kami;

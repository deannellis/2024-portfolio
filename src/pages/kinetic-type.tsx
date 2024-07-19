import { PageProps } from "gatsby";
import React, { FC } from "react";
import PageLayout from "../components/PageLayout";
import ProjectPage from "../components/ProjectPage";

const projectTechnologies = [
    {
        href: "https://www.adobe.com/products/aftereffects.html",
        label: "After Effects",
    },
    {
        href: "https://www.adobe.com/products/illustrator.html",
        label: "Illustrator",
    },
];

const KineticType: FC<PageProps> = (props) => {
    return (
        <PageLayout>
            <ProjectPage
                locationPathname={props.location.pathname}
                title="Kinetic Typography: The Life Aquatic"
                skills="Motion Design"
                buttons={[]}
                technologies={projectTechnologies}
                details="Motion Design Overview | 2012"
                background={
                    <>
                        <p>
                            This is an oldie and a project I can't help but
                            keeping around. It is one of my favorite projects
                            from school. While I don't do motion graphics much
                            these days, I use principals learned from this
                            project all of the time in animating things on the
                            web.
                        </p>
                        <p>
                            This kinetic typography animation samples audio from
                            the film <em>The Life Aquatic with Steve Zissou</em>
                            . This project demonstrates type in motion, creating
                            dynamic compositions.
                        </p>
                    </>
                }
            >
                <div className="project__video-player">
                    <iframe
                        src="https://player.vimeo.com/video/85829969?color=ffffff"
                        width="700"
                        height="394"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                        title="Kinetic Typography: The Life Aquatic"
                    ></iframe>
                </div>
            </ProjectPage>
        </PageLayout>
    );
};

export default KineticType;

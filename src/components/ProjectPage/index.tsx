import React, { FC } from "react";
import { Link } from "gatsby";

import {
    LeaveSiteIcon,
    GitHubIcon,
    PDFIcon,
    NextArrowIcon,
} from "../../utils/icons.js";
import { getNextProject } from "../../utils/projectList.js";

interface ProjectPageProps {
    title: string;
    skills: string;
    details?: string;
    children: React.ReactNode;
    buttons: { href: string; icon: string; label: string }[];
    background: React.ReactNode;
    technologies: { href?: string; label: string }[];
    locationPathname: string;
}

const getButtonIcon = (icon: string) => {
    switch (icon) {
        case "leaveSite":
            return <LeaveSiteIcon size="18" />;
        case "PDF":
            return <PDFIcon size="20" />;
        case "gitHub":
            return <GitHubIcon size="22" />;
        default:
            return <></>;
    }
};

const ProjectPage: FC<ProjectPageProps> = ({
    title,
    children,
    skills,
    details,
    buttons,
    background,
    technologies,
    locationPathname,
}) => {
    const nextProject = getNextProject(locationPathname);
    return (
        <>
            <div className="project">
                <section className="project__hero">
                    <h1>{title}</h1>
                    <h5>{skills}</h5>
                    {!!details && <p className="project__details">{details}</p>}
                    <div className="project__buttons">
                        {buttons.map(({ href, label, icon }) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button--outline"
                            >
                                {label}
                                {getButtonIcon(icon)}
                            </a>
                        ))}
                    </div>
                </section>
                <section>
                    <h3>Background</h3>
                    {background}
                </section>
                <section>{children}</section>
            </div>
            <section className="project__footer">
                <div className="project__footer-col">
                    <h3>Technologies Used</h3>
                    <ul>
                        {technologies.map(({ href, label }) => {
                            if (!!href) {
                                return (
                                    <li>
                                        <a target="_blank" href={href}>
                                            {label}
                                        </a>
                                    </li>
                                );
                            }
                            return <li>{label}</li>;
                        })}
                    </ul>
                </div>
                <div className="project__footer-col">
                    <Link to={nextProject.route}>
                        <div>
                            <span>Next Project</span>
                            <NextArrowIcon size="32" />
                        </div>
                        <img src={nextProject.image} alt={nextProject.title} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ProjectPage;

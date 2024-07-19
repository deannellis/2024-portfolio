import React from "react";
import PageLayout from "../components/PageLayout";

import portrait from "../assets/images/pixelPortrait.png";
import Icon from "../components/Icon";
import resumePdf from "../assets/pdfs/DeanNellis_Resume.pdf";

const AboutPage = () => {
    return (
        <PageLayout>
            <div className="about__wrapper ">
                <div className="about">
                    <div className="about__portrait">
                        <img
                            src={portrait}
                            alt="a pixel art portrait of my ugly mug"
                        />
                    </div>
                    <div className="about__copy">
                        <h1>About</h1>
                        <p>Hi I am Dean Nellis.</p>
                        <p>
                            I have worn many hats over the years: UX Researcher,
                            Product Designer, and Frontend Developer. Currently
                            I work at{" "}
                            <a target="_blank" href="https://dotdash.io/">
                                Dot Dash{" "}
                            </a>{" "}
                            as a Full Stack Developer, creating attractive and
                            intuitive digital experiences for our clients.
                        </p>
                        <p>
                            I graduated from the University of Cincinnati
                            College of Design, Architecture, Art, and Planning
                            with a bachelor's degree in Graphic Communication
                            Design, with a focus in Interaction Design. Over the
                            past 8 years, my passion has been cultivating my
                            skills in web development.
                        </p>
                        <p>
                            I am continually learning about web development and
                            building upon my skills. I love crafting quality
                            products that are delightful to use, collaborating
                            with others, and creating solutions to complex
                            problems.
                        </p>
                        <div style={{ display: "flex", marginTop: "3.2rem" }}>
                            <a
                                href={resumePdf}
                                target="blank"
                                className="button"
                            >
                                <Icon title="PDF Icon" size={20} />
                                View Résumé
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default AboutPage;

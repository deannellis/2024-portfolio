import * as React from "react";
import LandingHero from "../sections/LandingHero";
import PageLayout from "../components/PageLayout";
import ProjectCards from "../sections/ProjectCards";
import AsciiAnimtation from "../sections/AsciiAnimation";

const IndexPage = () => {
    return (
        <PageLayout>
            <LandingHero />
            <ProjectCards />
            <AsciiAnimtation />
        </PageLayout>
    );
};

export default IndexPage;

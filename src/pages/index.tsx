import * as React from "react";
import LandingHero from "../sections/LandingHero";
import PageLayout from "../components/PageLayout";
import ProjectCards from "../sections/ProjectCards";

const IndexPage = () => {
  return (
    <PageLayout>
      <LandingHero />
      <ProjectCards />
    </PageLayout>
  );
};

export default IndexPage;

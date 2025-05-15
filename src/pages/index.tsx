import * as React from "react";
import type { PageProps } from "gatsby";

import PageLayout from "../components/PageLayout";
import ProjectCards from "../sections/ProjectCards";
import Seo from "../components/Seo";

const LazyAsciiAnimation = React.lazy(
    () => import("../sections/AsciiAnimation")
);
const LazyLandingHero = React.lazy(() => import("../sections/LandingHero"));

const IndexPage: React.FC<PageProps> = ({ location }) => {
    const isSSR = typeof window === "undefined";
    console.log(">>>>>>>>>>>>>", location);
    return (
        <PageLayout>
            {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <LazyLandingHero />
                </React.Suspense>
            )}
            <Seo url={location.href} />
            <ProjectCards />
            {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <LazyAsciiAnimation />
                </React.Suspense>
            )}
        </PageLayout>
    );
};

export default IndexPage;

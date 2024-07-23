import * as React from "react";
import PageLayout from "../components/PageLayout";
import ProjectCards from "../sections/ProjectCards";

const LazyAsciiAnimation = React.lazy(
    () => import("../sections/AsciiAnimation")
);
const LazyLandingHero = React.lazy(() => import("../sections/LandingHero"));

const IndexPage = () => {
    const isSSR = typeof window === "undefined";
    return (
        <PageLayout>
            {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <LazyLandingHero />
                </React.Suspense>
            )}
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

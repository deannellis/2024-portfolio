import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
    title?: string;
    description?: string;
    url: string;
}

const Seo: FC<SeoProps> = ({
    title = "Dean Nellis",
    description = "Dean Nellis – Full-stack Developer, web artisan",
    url,
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta
                name="keywords"
                content="dean nellis, full-stack, developer, web, software, front-end, design"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta property="og:title" content={title} />
            <link rel="canonical" href={url} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Dean Nellis" />
            <meta name="robots" content="index, follow" />
            <meta
                name="googlebot"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta
                name="bingbot"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta name="author" content="Dean Nellis" />
            <meta name="publisher" content="Dean Nellis" />
            <meta property="og:image" content={`${url}OG.png`} />
        </Helmet>
    );
};

export default Seo;

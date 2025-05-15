import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Dean Nellis`,
        siteUrl: `https://www.deannellis.me`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Dean Nellis",
                short_name: "Dean Nellis",
                start_url: "/",
                background_color: "#94fefb",
                theme_color: "#94fefb",
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",
                icon: "src/assets/images/icon.png", // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/assets/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Share Tech Mono`, `Roboto\:100,300,400,700,900`],
                display: "swap",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/content/`,
                name: "content",
            },
        },
    ],
};

export default config;

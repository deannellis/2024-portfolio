import { Link } from "gatsby";
import React from "react";

import PageLayout from "../components/PageLayout";
import { SadComputerIcon } from "../utils/icons.js";

const NotFoundPage = () => (
    <PageLayout>
        <div className="not-found__wrapper">
            <SadComputerIcon size={144} />
            <h1>We Couldn't Find That Page</h1>
            <p>This page does not exist... the sadness.</p>
            <Link to="/">&#8592; Go back to the homepage</Link>
        </div>
    </PageLayout>
);

export default NotFoundPage;

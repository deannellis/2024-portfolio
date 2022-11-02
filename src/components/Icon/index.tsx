import React from "react";

import getPaths from "./paths";

type IconProps = {
    size?: number;
    title?: string;
};

const Icon = ({ size = 32, title = "Moon Icon" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 512 512"
        aria-labelledby="title"
    >
        <title id={title}>{title}</title>
        {getPaths(title)}
    </svg>
);

export default Icon;

import * as React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__fill"></div>
            <div>
                <p>© {new Date().getFullYear()} Dean Nellis</p>
            </div>
            <div className="footer__social">
                <a
                    href="https://www.linkedin.com/in/dean-nellis-78b680b5/"
                    target="blank"
                >
                    <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
                    </svg>
                </a>
                <a href="https://github.com/dean-dot-dash" target="blank">
                    <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M256 0C114.63 0 0 114.61 0 256c0 113.11 73.35 209.07 175.07 242.92 12.79 2.37 17.49-5.56 17.49-12.32 0-6.1-.24-26.27-.35-47.66C121 454.43 106 408.73 106 408.73c-11.65-29.58-28.43-37.45-28.43-37.45-23.23-15.89 1.75-15.57 1.75-15.57 25.71 1.81 39.24 26.39 39.24 26.39 22.84 39.13 59.89 27.82 74.5 21.28 2.3-16.55 8.93-27.84 16.26-34.24-56.87-6.47-116.64-28.42-116.64-126.51 0-27.95 10-50.79 26.38-68.72-2.66-6.45-11.42-32.48 2.48-67.75 0 0 21.5-6.87 70.41 26.25a242.68 242.68 0 01128.21 0c48.86-33.12 70.33-26.25 70.33-26.25 13.94 35.27 5.17 61.3 2.51 67.75 16.42 17.93 26.35 40.77 26.35 68.72 0 98.33-59.89 120-116.89 126.31 9.18 7.95 17.36 23.52 17.36 47.41 0 34.25-.3 61.82-.3 70.25 0 6.82 4.61 14.8 17.59 12.28C438.74 465 512 369.07 512 256 512 114.61 397.38 0 256 0z"
                            fillRule="evenodd"
                        />
                        <path d="M97 367.56c-.56 1.27-2.57 1.65-4.39.78s-2.89-2.57-2.29-3.85 2.55-1.67 4.4-.79 2.92 2.58 2.28 3.86zm-3.15-2.34M107.33 379.13c-1.22 1.13-3.61.6-5.23-1.19s-2-4.17-.75-5.32 3.58-.6 5.25 1.19 2 4.17.73 5.32zm-2.44-2.63M117.42 393.87c-1.56 1.09-4.13.07-5.72-2.21s-1.57-5 0-6.1 4.12-.11 5.72 2.15 1.57 5 0 6.16zm0 0M131.25 408.11c-1.4 1.55-4.39 1.13-6.58-1s-2.86-5-1.45-6.54 4.43-1.11 6.63 1 2.9 5 1.4 6.54zm0 0M150.33 416.38c-.62 2-3.5 2.92-6.4 2.07s-4.79-3.23-4.2-5.25 3.49-3 6.41-2.06 4.79 3.2 4.19 5.24zm0 0M171.28 417.92c.07 2.11-2.39 3.86-5.43 3.9s-5.54-1.64-5.57-3.72 2.4-3.86 5.46-3.92 5.54 1.64 5.54 3.74zm0 0M190.78 414.6c.36 2.06-1.76 4.17-4.78 4.74s-5.72-.73-6.1-2.77 1.78-4.23 4.75-4.78 5.74.72 6.13 2.81zm0 0" />
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

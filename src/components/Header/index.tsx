import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import Toggle from "../Toggle";
import useThemeToggle from "../../hooks/useThemeToggle";

const Header = () => {
    const [themeIsLight, toggleColorMode] = useThemeToggle();
    return (
        <header className="header">
            <Link to="/">
                <h2>Dean Nellis</h2>
            </Link>
            <div className="header__left">
                <nav className="header__nav">
                    <ul>
                        <li>Work</li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>About</li>
                    </ul>
                </nav>
                <Toggle
                    checked={!themeIsLight}
                    onIcon="Sun Icon"
                    offIcon="Moon Icon"
                    onToggleChange={() => {
                        toggleColorMode();
                    }}
                />
            </div>
        </header>
    );
};

export default Header;

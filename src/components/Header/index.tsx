import React, { useState } from "react";
import { Link } from "gatsby";
import { motion, Variants } from "framer-motion";

import Toggle from "../Toggle";
import useThemeToggle from "../../hooks/useThemeToggle";
import Icon from "../Icon";

const Header = () => {
    const [themeIsLight, toggleColorMode] = useThemeToggle();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const getDrawerVariants = (i = 0) => ({
        open: {
            right: 0,
            transition: { type: "tween", ease: "circIn", delay: i * 0.2 },
        },
        closed: {
            right: "-100vw",
            transition: { type: "tween", ease: "easeOut" },
        },
    });

    return (
        <header className="header">
            <Link to="/">
                <h2>Dean Nellis</h2>
            </Link>
            <div className="header__left">
                <nav className="header__nav">
                    <NavList />
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
            <button
                className="header__hamburger"
                onClick={() => {
                    setDrawerIsOpen(!drawerIsOpen);
                }}
            >
                <Icon title="Menu Icon" size={24} />
            </button>
            {Array(3)
                .fill()
                .map((_, i) => (
                    <motion.div
                        variants={getDrawerVariants(i)}
                        animate={drawerIsOpen ? "open" : "closed"}
                        className={`header__drawer--${i + 1}`}
                    />
                ))}
            <motion.div
                variants={getDrawerVariants(3)}
                animate={drawerIsOpen ? "open" : "closed"}
                className="header__drawer"
            >
                <div className="header__close-wrapper">
                    <button
                        className="header__close"
                        onClick={() => {
                            setDrawerIsOpen(false);
                        }}
                    >
                        <Icon title="Close Icon" size={24} />
                    </button>
                </div>
                <nav className="header__mobile-nav">
                    <NavList />
                </nav>
            </motion.div>
        </header>
    );
};

const NavList = () => (
    <ul>
        <li>Work</li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
);

export default Header;

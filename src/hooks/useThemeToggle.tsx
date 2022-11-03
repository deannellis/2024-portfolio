import React, { useState, useEffect } from "react";

const useThemeToggle = () => {
    const colors = {
        textColor: {
            light: "#16161a",
            dark: "#fff",
        },
        primaryBg: {
            light: "#fff",
            dark: "#16161a",
        },
        secondaryBg: {
            light: "#F3F3F3",
            dark: "#242629",
        },
    };

    const storedColorMode =
        localStorage.getItem("themeIsLight") !== null
            ? localStorage.getItem("themeIsLight") === "true"
            : false;

    const [themeIsLight, setThemeIsLight] = useState(storedColorMode);

    useEffect(() => {
        if (!storedColorMode) {
            updateThemeColors("light");
        }
    }, []);

    const toggleColorMode = () => {
        const newMode = themeIsLight ? "light" : "dark";
        localStorage.setItem("themeIsLight", `${!themeIsLight}`);
        setThemeIsLight(!themeIsLight);
        updateThemeColors(newMode);
    };

    const updateThemeColors = (newMode: "light" | "dark") => {
        document.documentElement.style.setProperty(
            "--text-color",
            `${colors.textColor[newMode]}`
        );
        document.documentElement.style.setProperty(
            "--primary-bg",
            `${colors.primaryBg[newMode]}`
        );
        document.documentElement.style.setProperty(
            "--secondary-bg",
            `${colors.secondaryBg[newMode]}`
        );
    };

    return [themeIsLight, toggleColorMode];
};

export default useThemeToggle;

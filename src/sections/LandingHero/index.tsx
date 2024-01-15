import React, { FC } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { rainbowCursor } from "cursor-effects";

import Typewriter from "../../components/Typewriter";

interface LandingHeroProps {}

const messages = [
    "I am a Full Stack Developer",
    "I am a Father",
    "I am a Pop Tart Enthusiast",
    "I am a CSS Wizard",
    "I am a Aesthete",
];

const LandingHero: FC<LandingHeroProps> = (props) => {
    const { scrollYProgress } = useScroll();
    const colors = ["#FCFE75", "#F4B2A8", "#94FEFB"];

    const getShadowString = (n: number) => {
        let shadowString = "";
        if (n == 0) {
            return "none";
        }
        const adjustedN = n * 3;
        for (let i = 0; i < adjustedN; i++) {
            let color = colors[2];
            if (i > adjustedN * 0.33) {
                color = colors[1];
            }
            if (i > adjustedN * 0.66) {
                color = colors[0];
            }
            shadowString += `${shadowString ? "," : ""} 0 -${i}px 0 ${color}`;
        }
        return shadowString;
    };

    const getScrollDistribution = (til: number, length: number) =>
        Array.from(Array(length)).map((n, i) => {
            if (i == 0) return i;
            return i * (til / (length - 1));
        });

    const getShadowArray = (length: number) =>
        Array.from(Array(length)).map((n, i) => getShadowString(i));

    const numShadowVariants = 12;

    const headerShadow = useTransform(
        scrollYProgress,
        getScrollDistribution(0.2, numShadowVariants),
        getShadowArray(numShadowVariants)
    );

    const variants = {
        in: (custom: number) => ({
            width: ["0%", "60%", "50%"],
            left: ["0%", "15%", "25%"],
            transition: { delay: custom * 0.3 + 0.5 },
        }),
    };

    new rainbowCursor({
        size: 6,
        length: 12,
        colors,
    });

    return (
        <section className="landing-hero__wrap">
            <div className="landing-hero__inner">
                <motion.div className="landing-hero">
                    <motion.h1
                        style={{
                            textShadow: headerShadow,
                        }}
                    >
                        Dean Nellis
                    </motion.h1>
                    <div className="landing-hero__br-wrap">
                        <motion.div
                            className="landing-hero__break"
                            animate="in"
                            variants={variants}
                            custom={3}
                        />
                        <motion.div
                            className="landing-hero__break"
                            animate="in"
                            variants={variants}
                            custom={2}
                        />
                        <motion.div
                            className="landing-hero__break"
                            animate="in"
                            variants={variants}
                            custom={1}
                        />
                        <motion.div
                            className="landing-hero__break"
                            animate="in"
                            variants={variants}
                            custom={0}
                        />
                    </div>
                    <Typewriter messages={messages} />
                </motion.div>
            </div>
        </section>
    );
};

export default LandingHero;

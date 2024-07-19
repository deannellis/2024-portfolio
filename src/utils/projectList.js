import flextCover from "../assets/images/flext_screencap_02.png";
import gourmandCover from "../assets/images/Gourmand_Cover.png";
import kineticTypeCover from "../assets/images/kineticType_Cover.png";
import diceRollerCover from "../assets/images/diceRoller_Cover.png";
import cobLifeCover from "../assets/images/CobLife_Cover.jpg";
import ispCover from "../assets/images/ISP_Cover.jpg";
import divertCover from "../assets/images/Divert_Cover.png";
import kamiCover from "../assets/images/Kami_Cover.png";
import noliCover from "../assets/images/Noli_Cover.png";
import randomRulesCover from "../assets/images/RandomRules_Cover.png";

export const projectList = [
    {
        route: "/noli",
        title: "NOLI",
        image: noliCover,
    },
    {
        route: "/random-rules",
        image: randomRulesCover,
        title: "Random Rules",
    },
    {
        route: "/divert",
        image: divertCover,
        title: "Divert",
    },
    {
        route: "/kami",
        title: "Kami",
        image: kamiCover,
    },

    {
        route: "/kinetic-type",
        title: "Kinetic Typography",
        image: kineticTypeCover,
    },
];

export const getNextProject = (pathName) => {
    const currentIndex = projectList.findIndex(
        (project) => project.route === pathName
    );
    if (currentIndex + 1 === projectList.length) {
        return projectList[0];
    }
    return projectList[currentIndex + 1];
};

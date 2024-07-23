import kineticTypeCover from "../assets/images/kineticType_Cover.png";
import divertCover from "../assets/images/Divert_Cover.png";
import kamiCover from "../assets/images/Kami_Cover.png";
import noliCover from "../assets/images/NOLI_Cover.png";
import randomRulesCover from "../assets/images/RandomRules_cover.png";

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

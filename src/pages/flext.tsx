import React, { FC } from "react";
import type { PageProps } from "gatsby";

import PageLayout from "../components/PageLayout";
import ProjectPage from "../components/ProjectPage";
import {
  FlextImage01,
  FlextImage02,
  FlextImage03,
} from "../assets/image-sharp/FlextImages.js";
import macroGif from "../assets/gifs/flextRecording.gif";

interface FlextProps {}

const buttons = [
  {
    href: "https://flext-app.herokuapp.com/",
    icon: "leaveSite",
    label: "Visit the Website",
  },
  {
    href: "https://github.com/deannellis/flext",
    icon: "gitHub",
    label: "Visit the GitHub Repo",
  },
];
const technologies = [
  {
    href: "https://reactjs.org/",
    label: "React",
  },
  {
    href: "https://redux.js.org/",
    label: "Redux",
  },
  {
    href: "https://d3js.org/",
    label: "D3",
  },
  {
    href: "http://firebase.google.com/",
    label: "Firebase",
  },
  {
    href: "https://webpack.js.org/",
    label: "Webpack",
  },
  {
    label: "Javascript ES6",
  },
  {
    href: "https://sass-lang.com/",
    label: "Sass",
  },
];

const Flext: FC<PageProps> = (props) => {
  return (
    <PageLayout>
      <ProjectPage
        title="flext"
        details="Personal Development | 2020"
        skills="Design / UI/UX / Development"
        buttons={buttons}
        technologies={technologies}
        locationPathname={props.location.pathname}
        background={
          <p>
            Flext is a single-page application that helps users create and
            maintain a weight lifting routine. This project uses{" "}
            <a href="https://d3js.org/">D3</a> to create intuitive, interactive
            visualizations of the user's data.
          </p>
        }
      >
        <div className="project__comp">
          <aside>
            <h4>Dashboard Page</h4>
            <p>
              The dashboard gives users a quick overview of:
              <ul>
                <li>Their next workout</li>
                <li>Past workouts</li>
                <li>Daily macros consumed</li>
              </ul>
            </p>
          </aside>
          <FlextImage02 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Lifts Page</h4>
            <p>
              The lifts page allows users to visualize their gains over time for
              each lift.
            </p>
          </aside>
          <FlextImage01 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Mid-workout</h4>
            <p>
              Flext will tell you exactly how much weight to put on the bar for
              each set. Depending on your results, flext will automatically
              adjust your weight.
            </p>
          </aside>
          <FlextImage03 />
        </div>
        <div className="project__comp">
          <aside>
            <h4>Macro Visualization</h4>
          </aside>
          <div className="project__mobile">
            <img
              src={macroGif}
              alt="Sample animation Macro Tracker visualization"
              width="352"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </ProjectPage>
    </PageLayout>
  );
};

export default Flext;

import React, { FC } from "react";
import { projectList } from "../../utils/projectList.js";

interface ProjectCardsProps {}

const ProjectCards: FC<ProjectCardsProps> = (props) => {
  return (
    <section className="project-cards__wrap">
      <div className="project-cards">
        {projectList.map(({ image, title, route }) => (
          <article className="project-cards__card" title={title} key={title}>
            <img src={image} alt={`${title} thumbnail`} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;

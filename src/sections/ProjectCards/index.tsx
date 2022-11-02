import React, { FC } from "react";
import { Link } from "gatsby";

import { projectList } from "../../utils/projectList.js";

interface ProjectCardsProps {}

const ProjectCards: FC<ProjectCardsProps> = (props) => {
  return (
    <section className="project-cards__wrap fwcc__wrapper">
      <div className="project-cards fwcc">
        {projectList.map(({ image, title, route }) => (
          <Link to={route} key={title} className="project-cards__link">
            <article className="project-cards__card" title={title}>
              <img src={image} alt={`${title} thumbnail`} />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;

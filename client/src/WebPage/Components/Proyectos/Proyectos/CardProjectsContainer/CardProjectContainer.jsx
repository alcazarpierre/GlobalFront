import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../../../redux/actionsProjects";

import CardProjects from "../CardProjects/CardProjects";

const Projects = () => {
  
  const dispatch = useDispatch();
  const allProjects = useSelector((state) => state.reducerProjects.allProjects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

 
  return (
    <div>
      <h2>Proyectos</h2>
      <div>
        {allProjects.map((projects) => (
          <CardProjects
            id = {projects.id}
            key={projects.id}
            title={projects.title}
            projectCategoryId={projects.projectCategoryId}
            projectCategory={projects.projectCategory}
            image={projects.image}
            date={projects.date}
            description={projects.description}
            location={projects.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

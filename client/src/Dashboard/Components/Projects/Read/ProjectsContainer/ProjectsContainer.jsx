import React, { useEffect, useState } from "react";
import "./ProjectsContainer.modules.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../../../../redux/actionsProjects";
import { useDispatch } from "react-redux";
import { filtered } from "../../../../../redux/actionsProjects";
const ProjectsContainer = () => {
  const navigate = useNavigate();
  let projects = useSelector((state) => state.reducerProjects.allProjects);

  const dispatch = useDispatch();
  const filtrar = (event) => {
    switch (event.target.value) {
      case "0":
        dispatch(getAllProjects());
      case "1":
        dispatch(filtered(1));
        break;
      case "2":
        dispatch(filtered(2));
        break;
      case "3":
        dispatch(filtered(3));
        break;
      case "4":
        dispatch(filtered(4));
        break;
      case "5":
        dispatch(filtered(5));
        break;
      default:
        break;
    }
  };
  const handleClick = () => {
    const newState = {
      categories: "Proyectos",
    };
    navigate("/admin/proyectos/create", { state: newState });
  };
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div className="proyects-container">
      <div className="select-agregar">
        <div>
          <label className="label-tipo">Tipo: </label>
          <select onChange={filtrar} className="select-tipo">
            <option value={0}>Todos</option>
            <option value={1}>Educación</option>
            <option value={2}>Géneros y diversidades</option>
            <option value={3}>Acción climática</option>
            <option value={4}>Club de emprendedores</option>
            <option value={5}>I-team</option>
          </select>
        </div>
        <button className="agregar-proyecto" onClick={handleClick}>
          AGREGAR PROYECTO
        </button>
      </div>
      <div className="allcard-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            name={project.name}
            date={project.date}
            location={project.location}
            image={project.image}
            description={project.description}
            projectCategoryId={project.projectCategoryId}
            teamMemberId={project.TeamMembers}
            status={project.status}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;

import React from "react";
import "./ProjectCard.modules.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProject } from "../../../../../redux/actionsProjects";

const ProjectCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const handleClick = (event) => {
    // console.log("apretaste el boton");
    if (event.target.name === "no") {
      setState(false);
    } else if (event.target.name === "si") {
      dispatch(deleteProject(props.id));
    } else {
      setState(true);
    }
  };

  const handleEdit = () => {
    const propiedades = {
      id: props.id,
      categories: props.categories,
      title: props.title,
      description: props.description,
      date: props.date,
      image: props.image,
      location: props.location,
      projectCategoryId: props.projectCategoryId,
      teamMemberId: props.teamMemberId,
      status: props.status,
    };

    navigate("/admin/proyectos/create", { state: { propiedades } });
  };

  useEffect(() => {}, [state]);
  return (
    <div className="card-proyect">
      <img src={props.image} alt="prueba" className="imagen-proyect" />
      <div className="title-description">
        <h2 className="title-proyect">{props.title}</h2>
        <p className="description-proyect">{props.description}</p>
      </div>
      <div className="div-botones">
        <button className="boton-delete" onClick={handleClick}>
          X
        </button>
        <button onClick={handleEdit}>EDITAR</button>
      </div>
      {state ? (
        <div className="delete">
          <p className="pregunta">Desea eliminar este proyecto?</p>{" "}
          <div className="botonesSiNo">
            <button className="boton-cartel" onClick={handleClick} name="si">
              SI
            </button>
            <button className="boton-cartel" onClick={handleClick} name="no">
              NO
            </button>
          </div>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;

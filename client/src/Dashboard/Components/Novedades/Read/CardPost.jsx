import React, { useEffect } from "react";
import "./CardPost.modules.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deletePost } from "../../../../redux/actionsProjects";
import { useDispatch } from "react-redux";
const CardPost = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const handleClick = (event) => {
    if (event.target.name === "no") {
      setState(false);
    } else if (event.target.name === "si") {
      dispatch(deletePost(props.id));
      setState(false);
    } else {
      setState(true);
    }
  };
  const handleEdit = () => {
    navigate("/admin/novedades/create", { state: { props } });
  };
  useEffect(() => {}, [state]);
  return (
    <div className="card-posteo">
      <img src={props.image} alt="imagen" className="imagen-post" />
      <div>
        <h2>{props.title}</h2>
        <p className="parrafo-novedad">{props.description}</p>
      </div>
      <div className="delete-editar">
        <button className="button-editar-post" onClick={handleClick}>
          X
        </button>
        <button onClick={handleEdit}>EDITAR</button>
      </div>
      {state ? (
        <div className="delete">
          <p className="pregunta">Desea eliminar esta publicacion?</p>{" "}
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

export default CardPost;

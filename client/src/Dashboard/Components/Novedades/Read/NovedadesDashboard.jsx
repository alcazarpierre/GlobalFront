import React from "react";
import "./NovedadesDashboard.modules.css";
import { Link } from "react-router-dom";
import CardPost from "./CardPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getPosts } from "../../../../redux/actionsPosts";
import { getAchievements } from "../../../../redux/actionsAchievements";
import { getNewsEvent } from "../../../../redux/actionsNews";
import { getStories } from "../../../../redux/actionsPosts";
import { getNews } from "../../../../redux/actionsNews";
const NovedadesDashboard = () => {
  const dispatch = useDispatch();
  const posteos = useSelector((state) => state.reducerProjects.allPost);
  const filtrar = (event) => {
    switch (event.target.value) {
      case "todo":
        dispatch(getPosts());
        break;
      case "logros":
        dispatch(getAchievements());
        break;
      case "noticias":
        dispatch(getNews());
        break;
      case "eventos":
        dispatch(getNewsEvent());
        break;
      case "historias":
        dispatch(getStories());
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="novedades-container">
      <div className="filtrado-boton">
        <div>
          <label className="label-categotia">Categorias: </label>
          <select onChange={filtrar} className="select-categorias">
            <option disabled>Seleccionar</option>
            <option value="todo">Todo</option>
            <option value="logros">Logros</option>
            <option value="historias">Historias</option>
            <option value="noticias">Noticias</option>
            <option value="eventos">Eventos</option>
          </select>
        </div>
        <h2 className="h2-novedades">NOVEDADES</h2>
        <Link to="/admin/novedades/create">
          <button className="boton-publicar-novedad">PUBLICAR</button>
        </Link>
      </div>
      <div className="container-posts">
        {posteos ? (
          posteos.map((post) => (
            <CardPost
              id={post.id}
              categories={post.categories}
              title={post.title}
              image={post.image}
              date={post.date}
              description={post.description}
              teamMemberId={post.TeamMembers}
              location={post.location}
              status={post.status}
              projectCategoryId={post.projectCategoryId}
            />
          ))
        ) : (
          <h2>No hay novedades publicadas</h2>
        )}
      </div>
    </div>
  );
};

export default NovedadesDashboard;

import React from "react";
//commit
import "./Create.modules.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShapers } from "../../../../../redux/actionsMembers";
import { uploadImage } from "../../../ImageHandler/cloudinary";
import { useNavigate } from "react-router-dom";
import { postProject } from "../../../../../redux/actionsProjects";
import ConfirmationUpdate from "./ConfirmationUpdate";
import axios from "axios";
const Create = () => {
  const fileInput = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const members = useSelector((state) => state.reducerMembers.allShapers);
  // console.log(members);
  const propiedades = location.state ? location.state.propiedades : null;
  const post =
    location.state && location.state.props ? location.state.props : null;
  // console.log("hola");
  // console.log(post);
  const categoria =
    location.state && location.state.categories
      ? location.state.categories
      : null;

  const [confirmation, setConfirmation] = useState(false);
  const [add, setAdd] = useState(false);
  const [publicar, setPublicar] = useState(false);
  const [state, setState] = useState({
    categories: categoria ?? "",
    title: "",
    description: "",
    date: "",
    image: "",
    location: "",
    projectCategoryId: "",
    teamMemberId: [],
    status: "",
  });
  // console.log(state);
  const handleChange = (event) => {
    if (event.target.name === "teamMemberId") {
      if (!state.teamMemberId.includes(parseInt(event.target.value))) {
        setState({
          ...state,
          teamMemberId: [...state.teamMemberId, parseInt(event.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (post) {
      try {
        await axios.put(`http://localhost:3001/post/${post.id}`, state);
        setConfirmation(true);
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        await axios.put(`http://localhost:3001/post/${propiedades.id}`, state);
        setConfirmation(true);
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleAgregar = async (event) => {
    event.preventDefault();
    if (event.target.name === "publicar") {
      dispatch(postProject(state));
      setPublicar(true);
    } else {
      const proyecto = {
        ...state,
      };
      dispatch(postProject(proyecto));
      setAdd(true);
    }
  };

  const removeMember = (event) => {
    // console.log("hola");
    const filtrado = state.teamMemberId.filter(
      (id) => id !== parseInt(event.target.value)
    );
    setState({
      ...state,
      teamMemberId: filtrado,
    });
    // console.log(state.teamMemberId);
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        alert("Invalid file format. Please upload a JPEG, JPG or PNG image.");
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("File size exceeds 5MB limit.");
        return;
      }

      try {
        const imageUrl = await uploadImage(file);
        if (imageUrl) {
          setState({
            ...state,
            image: imageUrl,
          });
        } else {
          alert("Image upload failed. Please, try again later.");
        }
      } catch (error) {
        alert("Error uploading file. Please try again later.", error);
      }
    }
  };
  useEffect(() => {
    dispatch(getShapers());
    if (propiedades) {
      setState({
        title: propiedades.title,
        description: propiedades.description,
        image: propiedades.image,
        date: propiedades.date,
        location: propiedades.location,
        projectCategoryId: propiedades.projectCategoryId,
        teamMemberId: propiedades.teamMemberId.map(
          (miembro) => miembro.MemberProject.TeamMemberId
        ),
        status: propiedades.status,
      });
    }
    if (post) {
      setState({
        title: post.title,
        description: post.description,
        image: post.image,
        date: post.date,
        location: post.location,
        projectCategoryId: post.projectCategoryId,
        teamMemberId: post.teamMemberId.map(
          (miembro) => miembro.MemberProject.TeamMemberId
        ),
        status: post.status,
      });
    }
    return () => {
      setConfirmation(false);
      setAdd(false);
      setPublicar(false);
    };
  }, []);
  return (
    <div className="container-formulario">
      {propiedades ? (
        <h2>EDITAR PROYECTO</h2>
      ) : categoria ? (
        <h2>AGREGAR PROYECTO</h2>
      ) : post ? (
        <h2>EDITAR NOVEDAD</h2>
      ) : (
        <h2>PUBLICAR NOVEDAD</h2>
      )}
      <div className="form">
        <form onSubmit={handleSubmit} className="formulario-compartido">
          {!location.state ? (
            <div>
              <label>Categoria</label>
              <select
                onChange={handleChange}
                name="categories"
                value={state.categories}
              >
                <option disabled value="">
                  Seleccionar
                </option>
                <option value="Logros">Logros</option>
                <option value="Historias">Historias</option>
                <option value="Noticias">Noticias</option>
                <option value="Eventos">Eventos</option>
              </select>
            </div>
          ) : null}

          <div>
            <label>TITULO</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={state.title}
            />
          </div>
          <div>
            <label>DESCRIPCION</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={state.description}
            />
          </div>
          <div>
            <label>FECHA</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={state.date}
            />
          </div>
          <div>
            <label>Localidad</label>
            <input
              type="text"
              value={state.location}
              name="location"
              onChange={handleChange}
            />
          </div>

          <div className="selectores">
            <div>
              <label>TIPO</label>{" "}
              <select
                onChange={handleChange}
                name="projectCategoryId"
                value={state.projectCategoryId}
              >
                <option disabled value="">
                  Seleccionar
                </option>
                <option value={1}>Educacion</option>
                <option value={2}>Generos y diversidades</option>
                <option value={3}>Accion climatica</option>
                <option value={4}>Club de emprendedores</option>
                <option value={5}>I-team</option>
              </select>
            </div>
            <div>
              <label>Miembros Asociados</label>
              <select
                name="teamMemberId"
                value={state.teamMemberId}
                onChange={handleChange}
              >
                <option disabled value="">
                  Miembros
                </option>
                {members?.map((miembro) => (
                  <option value={miembro.id} key={miembro.id}>
                    {miembro.foreName + " " + miembro.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="imagen-miembros">
            <div className="div-imagen">
              {state.image ? (
                <img src={state.image} className="imagen-posteo" />
              ) : (
                <h2>Carga imagen...</h2>
              )}
            </div>
            <div className="container-members-select">
              {state.teamMemberId?.map((id) => {
                const member = members.find(
                  (miembro) => miembro.id === parseInt(id)
                );
                if (member) {
                  return (
                    <div className="nombre-agregado" key={id}>
                      <h2>{`${member?.foreName} ${member?.lastName}`}</h2>
                      <button value={id} onClick={removeMember}>
                        X
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="archivo-estado">
            <div className="imagen-input">
              <label>Imagen</label>
              <input
                type="file"
                name="image"
                id="image"
                ref={fileInput}
                onChange={handleFileChange}
                className="input-imagen"
              />
            </div>
            <div className="estado">
              <label>ESTADO:</label>
              <select
                onChange={handleChange}
                name="status"
                value={state.status}
              >
                <option disabled value="">
                  Estado
                </option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>

          {propiedades || post ? (
            <button type="submit">EDITAR</button>
          ) : categoria ? (
            <button onClick={handleAgregar}>AGREGAR</button>
          ) : (
            <button onClick={handleAgregar} name="publicar">
              PUBLICAR
            </button>
          )}
          {confirmation ? <ConfirmationUpdate /> : null}
          {add || publicar ? (
            <div className="proyecto-agregado">
              <div className="cartel">
                {add ? <h2>PROYECTO AGREGADO</h2> : <h2>PUBLICADO</h2>}
                {add ? (
                  <Link to="/admin/proyectos">
                    <button>ACEPTAR</button>
                  </Link>
                ) : (
                  <Link to="/admin/novedades">
                    <button>ACEPTAR</button>
                  </Link>
                )}
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Create;

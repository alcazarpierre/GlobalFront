import React from "react";
//commit
import "./Create.modules.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShapers } from "../../../../redux/actionsMembers";
import { putPost } from "../../../../redux/actionsPosts";
import { uploadImage } from "../../ImageHandler/cloudinary";
import { useNavigate } from "react-router-dom";
import { postProject } from "../../../../redux/actionsProjects";
import ConfirmationUpdate from "./ConfirmationUpdate";
import validate from "./Validation";

const Create = () => {
  const fileInput = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const members = useSelector((state) => state.reducerMembers.allShapers);

  const propiedades = location.state ? location.state.propiedades : null;
  const post =
    location.state && location.state.props ? location.state.props : null;

  const categoria =
    location.state && location.state.categories
      ? location.state.categories
      : null;

  const [confirmation, setConfirmation] = useState(false);
  const [add, setAdd] = useState(false);
  const [publicar, setPublicar] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [touched, setTouched] = useState(false);
  const [state, setState] = useState({
    categories: categoria ?? "",
    title: "",
    image: "",
    date: "",
    description: "",
    location: "",
    projectCategoryId: "",
    status: "",
    teamMemberIds: [],
  });

  const [errors, setErrors] = useState({
    categories: "",
    title: "",
    image: "",
    date: "",
    description: "",
    location: "",
    projectCategoryId: "",
    status: "",
  });

  const handleChange = (event) => {
    setTouched(true);

    if (event.target.name === "teamMemberId") {
      if (!state.teamMemberIds.includes(parseInt(event.target.value))) {
        setState({
          ...state,
          teamMemberIds: [...state.teamMemberIds, parseInt(event.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
      setErrors(
        validate({
          ...state,
          [event.target.name]: event.target.value,
        })
      );
    }

    const hasErrors = Object.values(errors).some((error) => error.length > 0);
    setIsSubmitDisabled(!touched || hasErrors);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (post) {
      try {
        const put = await dispatch(putPost(post.id, state));
        put && put.id ? setConfirmation(true) : null;
      } catch (error) {
        alert("No se pudo editar", error);
      }
    } else {
      try {
        const put = await dispatch(putPost(propiedades.id, state));
        put && put.id ? setConfirmation(true) : null;
      } catch (error) {
        alert("No se pudo editar", error);
      }
    }
  };

  const handleAgregar = async (event) => {
    event.preventDefault();
    if (event.target.name === "publicar") {
      const novedad = {
        categories: state.categories,
        title: state.title,
        image: state.image,
        date: state.date,
        description: state.description,
        location: state.location,
        projectCategoryId: [state.projectCategoryId],
        status: state.status,
        teamMemberId: [...state.teamMemberIds],
      };
      try {
        let response = await dispatch(postProject(novedad));
        response && response.id ? setPublicar(true) : null;
      } catch (error) {
        alert("No se pudo publicar", error);
      }
    } else {
      const proyecto = {
        categories: state.categories,
        title: state.title,
        image: state.image,
        date: state.date,
        description: state.description,
        location: state.location,
        projectCategoryId: [state.projectCategoryId],
        status: state.status,
        teamMemberId: [...state.teamMemberIds],
      };
      try {
        let project = await dispatch(postProject(proyecto));
        project && project.id ? setAdd(true) : null;
      } catch (error) {
        alert("No se pudo agregar", error);
      }
    }
  };

  const removeMember = (event) => {
    const filtrado = state.teamMemberIds.filter(
      (id) => id !== parseInt(event.target.value)
    );
    setState({
      ...state,
      teamMemberIds: filtrado,
    });
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
        teamMemberIds: propiedades.teamMemberId.map(
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
        teamMemberIds: post.teamMemberId.map(
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
      <Link
        to={
          location.pathname === "/admin/proyectos/create"
            ? "/admin/proyectos"
            : "/admin/novedades"
        }
      >
        <button className="boton-volver">VOLVER</button>
      </Link>
      {propiedades ? (
        <h2>EDITAR PROYECTO</h2>
      ) : categoria ? (
        <h2 className="h2-agregar-proyecto">Agregar proyecto:</h2>
      ) : post ? (
        <h2>EDITAR NOVEDAD</h2>
      ) : (
        <h2>PUBLICAR NOVEDAD</h2>
      )}
      <div className="form">
        <form onSubmit={handleSubmit} className="formulario-compartido">
          {!location.state ? (
            <div className="div-categoria">
              <label className="label-post">
                *Seleccione el tipo de categoria:
                <br />{" "}
                {errors.categories && (
                  <span className="p-errors">{errors.categories}</span>
                )}
              </label>
              <select
                onChange={handleChange}
                name="categories"
                value={state.categories}
                className="select-style"
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
          <div className="title-date">
            <div className="div-labeltitle">
              <label className="label-post">
                Título:{" "}
                {errors.title && (
                  <span className="p-errors">{errors.title}</span>
                )}
              </label>

              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={state.title}
                className="input-general"
              />
            </div>
            <div className="div-labeldate">
              <label className="label-post">
                Fecha:
                {errors.date && <span className="p-errors">{errors.date}</span>}
              </label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={state.date}
                className="input-general"
              />
            </div>
          </div>
          <div className="description-localidad">
            <div className="label-descripcion">
              <label className="label-post">
                Descripción:
                {errors.description && (
                  <span className="p-errors">{errors.description}</span>
                )}
              </label>

              <textarea
                type="text"
                name="description"
                onChange={handleChange}
                value={state.description}
                className="input-descripcion"
              />
            </div>

            <div className="label-location">
              <label className="label-post">
                Localidad:{" "}
                {errors.location && (
                  <span className="p-errors">{errors.location}</span>
                )}
              </label>
              <input
                type="text"
                value={state.location}
                name="location"
                onChange={handleChange}
                className="input-general"
              />
            </div>
          </div>
          <div className="div-grande">
            <div className="selectores">
              <div className="imagen-input">
                <label className="label-post">Imagen:</label>
                <input
                  type="file"
                  name="image"
                  ref={fileInput}
                  onChange={handleFileChange}
                  className="input-imagen"
                />
              </div>

              <div className="div-imagen">
                {state.image ? (
                  <img src={state.image} className="imagen-posteo" />
                ) : (
                  <h2>
                    {errors.image && (
                      <span className="p-errors">{errors.image}</span>
                    )}
                  </h2>
                )}
              </div>
            </div>
            <div className="imagen-miembros">
              <div>
                <label className="label-post">Miembros asociados:</label>
                <select
                  name="teamMemberId"
                  value={state.teamMemberId}
                  onChange={handleChange}
                  className="select-style"
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
              <div className="container-members-select">
                {state.teamMemberIds?.map((id) => {
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
          </div>
          <div className="archivo-estado">
            <div>
              <label className="label-post">
                Tipo:{" "}
                {errors.projectCategoryId && (
                  <span className="p-errors">{errors.projectCategoryId}</span>
                )}
              </label>
              <select
                onChange={handleChange}
                name="projectCategoryId"
                value={state.projectCategoryId}
                className="select-style"
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
            <div className="estado">
              <label className="label-post">ESTADO:</label>
              <select
                onChange={handleChange}
                name="status"
                value={state.status}
                className="select-style"
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
            <button type="submit" className="botones-form" disabled={false}>
              EDITAR
            </button>
          ) : categoria ? (
            <button
              onClick={handleAgregar}
              className="botones-form"
              disabled={isSubmitDisabled}
            >
              AGREGAR
            </button>
          ) : (
            <button
              onClick={handleAgregar}
              name="publicar"
              className="botones-form"
              disabled={isSubmitDisabled}
            >
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

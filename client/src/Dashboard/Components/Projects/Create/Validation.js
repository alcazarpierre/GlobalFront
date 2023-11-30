const validate = (state) => {
  const errors = {};
  if (state.title.length < 10 || state.title.length > 100) {
    errors.title = "*Debe tener entre 10-100 caracteres";
  }
  if (!state.categories) {
    errors.categories = "*Campo requerido";
  }
  if (state.categories === "Noticias" || state.categories === "Eventos") {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(state.date)) {
      errors.date = "*Campo requerido";
    }
  }
  if (state.description.length < 10 || state.description.length > 1000) {
    errors.description = "*Debe contener entre 10-1000 caracteres";
  }
  if (
    state.categories === "Noticias" ||
    state.categories === "Proyectos" ||
    state.categories === "Eventos"
  ) {
    if (!state.location) {
      errors.location = "*Campo requerido";
    }
  }
  if (!state.image) {
    errors.image = "*Imagen requerida";
  }
  if (!state.projectCategoryId) {
    errors.projectCategoryId = "*Elija una opción";
  }
  return errors;
};

export default validate;

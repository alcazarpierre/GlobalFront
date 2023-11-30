import "./HomeDash.modules.css";


const HomeDashboard = () => {
  


  return (
    <div className="home-dash">
      <div className="info-container-home-dash">
        <div className="title-home-dash">
        <h1>Bienvenido al Panel del Administrador</h1>
      </div>
      <div className="subTitle-home-dash">
        <h2>Gestiona toda la Información de tu sitio facilmente desde un solo lugar</h2>
      </div>
      <div className="content-home-dash">
        <h3>Agrega Miembros, edita roles y asigna proyectos <br />
            Agrega Publicaciones categorizadas como Proyectos, Noticias, Eventos, Historias y Logros. <br />
            Catgeriza cada publicación por Áreas de Impacto como Educación, Género y Diversidad, Acción Climática, Club de Emprendedores, I-Team. <br />
            Publica y edita las Preguntas Frecuentes y la Información principal de contacto.
        </h3>
        <p>Para asesoría técnica y/o requerimientos funcionales adicionales, no dudes en contactar al Equipo de Desarrollo</p>
        <ul>
            <li>Luana Michelangeli    Arg.  +54 9 11 4197-9187</li>
            <li>Pierre Alcázar        Pe.   +51 924-707-719</li>
            <li>Carlos Loboguerrero   Mex.  +52 722 529-2326</li>
            <li>Gustavo Cárdenas      Mex.  +52 81 1588-1959</li>
            <li>Franco García         Arg.  +54 9 341 540-0051</li>
            <li>Nicolás Calvi         Arg.  +54 9 351 239-3288</li>
            <li>Jonathan García       Arg.  +54 9 11 5482-8676</li>
            <li>Juan Chiquiza         Col.  +57 311 2633-228</li>
        </ul>      
      </div>
      </div>
      
    </div>
  );
};

export default HomeDashboard;

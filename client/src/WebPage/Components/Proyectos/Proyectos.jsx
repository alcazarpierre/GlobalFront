import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from "react-router-dom";

import imgproyectos from "../../../assets/Images/General/imgproyectos.png";
import PostSubCategoryContainer from "../PostsSubCategorias/PostSubCategoryContainer";

import "./Proyectos.modules.css";

const Proyectos = () => {
  
  const [postCategorySelector, setPostCategorySelector] = useState(1);

  const handleMeInteresa = (areaId) => {
    localStorage.setItem("interes", JSON.stringify(areaId));
  
    setPostCategorySelector(areaId);
  };


  return (
    <div className="webProyectos">
        <h1 className="titulo-general-webProyectos">ÁREAS DE IMPACTO</h1>
      <div className="contenedor-superior-webProyectos">
        <div className="contenedor-superior-izquierdo-webProyectos">
          <img className="proyectoImg-webProyectos" src={imgproyectos} alt="imagen proyecto" />
        </div>
        <div className="contenedor-superior-derecho-webProyectos">
          <div className="cardProyecto-webProyectos">
            
            <div className="cardTitulo-webProyectos">
              <h1 >EDUCACIÓN</h1>
            </div>
            <div className="cardTexto-webProyectos">
              <p >
              Impulsamos iniciativas para asegurar el acceso y la permanencia en el sistema educativo de niñxs y jóvenes, potenciando su posterior inserción laboral.
              </p>
            </div>
            <div className="buttonCard-container-webProyectos">
                  <ScrollLink to="projectsContainer-webProyectos" spy={true} smooth={true} duration={500}>
                  <button className="buttonCard-webProyectos" onClick={() => handleMeInteresa(1)}>
                    Ver Más
                  </button>
                  </ScrollLink>
            </div>
  
          </div>

          <div className="cardProyecto-webProyectos">
          
            <div className="cardTitulo-webProyectos">
              <h1 >GÉNEROS Y DIVERSIDADES</h1>
            </div>
            <div className="cardTexto-webProyectos"> 
              <p >
              Trabajamos por una sociedad más igualitaria, equitativa y diversa, así como también, impulsamos iniciativas para transversalizar la perspectiva de género al interior de nuestra organización.
              </p>
            </div>
            <div className="buttonCard-container-webProyectos">
                  <ScrollLink to="projectsContainer-webProyectos" spy={true} smooth={true} duration={500}>
                  <button className="buttonCard-webProyectos" onClick={() => handleMeInteresa(2)}>
                    Ver Más
                  </button>
                  </ScrollLink>
            </div>
           
          </div>

          <div className="cardProyecto-webProyectos">
          
            <div className="cardTitulo-webProyectos">
              <h1 >ACCIÓN CLIMATICA</h1>
            </div>
            <div className="cardTexto-webProyectos">
              <p >
              Impulsamos la implementación del ODS N° 13 “Acción por el clima” a través de proyectos, actividades y conversaciones que impacten positivamente en la gestión ambiental de nuestra ciudad y nuestro entorno.
              </p>
            </div>
            <div className="buttonCard-container-webProyectos">
                <ScrollLink to="projectsContainer-webProyectos" spy={true} smooth={true} duration={500}>
                  <button className="buttonCard-webProyectos" onClick={() => handleMeInteresa(3)}>
                    Ver Más
                  </button>
                  </ScrollLink>
            </div>
           
          </div>

          <div className="cardProyecto-webProyectos">
           
            <div className="cardTitulo-webProyectos">
              <h1 >CLUB DE EMPRENDEDORES</h1>
            </div>
            <div className="cardTexto-webProyectos">
              <p >
              Fomentamos el desarrollo de emprendimientos de triple impacto con el objetivo de estimular el crecimiento económico de la ciudad de Córdoba
              </p>
            </div>
            <div className="buttonCard-container-webProyectos">
                  <ScrollLink to="projectsContainer-webProyectos" spy={true} smooth={true} duration={500}>
                  <button className="buttonCard-webProyectos" onClick={() => handleMeInteresa(4)}>
                    Ver Más
                  </button>
                  </ScrollLink>
            </div>
          
          </div>

          <div className="cardProyecto-webProyectos">
          
            <div className="cardTitulo-webProyectos">
              <h1 >I-TEAMS CORDOBA</h1>
            </div>
            <div className="cardTexto-webProyectos">
              <p >
              Es un programa de vinculación en el que equipos multidisciplinarios analizan cómo y en qué lugar insertar tecnologías y resultados de investigaciones desarrolladas en universidades e institutos locales.
              </p>
            </div>
            <div className="buttonCard-container-webProyectos">
                   <ScrollLink to="projectsContainer-webProyectos" spy={true} smooth={true} duration={500}>
                  <button className="buttonCard-webProyectos" onClick={() => handleMeInteresa(5)}>
                    Ver Más
                  </button>
                  </ScrollLink>
            </div>
          
          </div>

        </div>
      </div>
    
      <div className="projectsContainer-webProyectos">
        <div className="title-container-webProyectos">
            <h2>Acá puedes enterarte de todas nuestros Proyectos, logros, historias y demás...</h2>
            
        </div>
        
        <div className="categoryAllPost-container-webProyectos">
            <PostSubCategoryContainer postCategorySelector={postCategorySelector} />
        </div>
      </div>

    </div>
  );
};

export default Proyectos;



    
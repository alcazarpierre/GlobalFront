import DashFaqContainer from "./Read/Dash-FaqContainer/DashFaqContainer";
import FaqForm from "./Create/CreateFaq";
import "./AdminFaqs.modules.css";

const FaqsDashboard = () => {
  return (
    <div className="adminFaq-dash">
        <h1>Faqs</h1>
        <div>
            <h2>Preguntas y Respuestas actualmente desplegadas:</h2>
            <div className="dashFaq-Component">
               <DashFaqContainer/>
            </div>
            
            <h2>Desplegar nueva Pregunta y Respuesta</h2>  
            <div>
              <FaqForm/>
            </div>
        </div>
    </div>
  );
};

export default FaqsDashboard;
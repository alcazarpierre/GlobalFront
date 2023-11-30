import React from "react";
import "./Confirmation.modules.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ConfirmationUpdate = () => {
  const location = useLocation();
  return (
    <div className="confirmation-container">
      <div className="cartel-update">
        <h2>DATOS ACTUALIZADOS!</h2>
        <Link
          to={
            location.pathname === "/admin/proyectos/create"
              ? "/admin/proyectos"
              : "/admin/novedades"
          }
        >
          <button>ACEPTAR</button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationUpdate;

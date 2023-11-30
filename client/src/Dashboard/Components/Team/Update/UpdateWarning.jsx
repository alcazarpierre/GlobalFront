import './UpdateMember.modules.css'

const UpdateWarning = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Los Datos del Miembro Han Sido Actualizados</h2>
        <div className='button-container'>
            <h3 className='accept-button' onClick={onClose}>Aceptar</h3>
        </div>
      </div>
    </div>
  );
};

export default UpdateWarning

import './CreateMember.modules.css';

const ConfirmationPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>¡El Miembro Ha Sido Creado Exitosamente!</h2>
                <div className='button-container'>
                    <h3 className='accept-button' onClick={onClose}>Aceptar</h3>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
import './Contacto.modules.css';

const SentConfirmationPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h3>¡Muchas gracias por conmunicarte con nosotros! En breve nos pondremos en contacto contigo.</h3>
                <div className='button-container'>
                    <h3 className='accept-button' onClick={onClose}>Aceptar</h3>
                </div>
            </div>
        </div>
    );
};

export default SentConfirmationPopup;
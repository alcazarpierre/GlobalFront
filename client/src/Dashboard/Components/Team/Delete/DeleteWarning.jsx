import './DeleteRevertMember.modules.css'

const DeleteWarning = ({ onAccept, onCancel }) => {
    return (
      <div className='final-delete-popup'>
        <div className='final-delete-content'>
          <h2>¡ADVERTENCIA!</h2>
          <p>El miembro será borrado dfinitivamente del sistema. ¿Desea continuar?</p>
          <div className='button-final-delete-container'>
            <h3 className='final-delete-button' onClick={onAccept}>Aceptar</h3>
            <h3 className='final-cancel-button' onClick={onCancel}>Cancelar</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteWarning;
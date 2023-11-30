import './UpdateMember.modules.css'

const DeleteWarning = ({ onCancel, onDelete }) => {
  return (
    <div className='delete-confirmation-popup'>
      <div className='delete-confirmation-content'>
      <h2>¿Desea Eliminar Este Miembro?</h2>
        <p>El miembro pasará a la sección "Eliminados"</p>
        <div className='button-confirmation-container'>
          <h3 className='update-cancel-button' onClick={onCancel}>Cancelar</h3>
          <h3 className='update-delete-accept-button' onClick={onDelete}>Aceptar</h3>
        </div>
      </div>
    </div>
  );
};

export default DeleteWarning;
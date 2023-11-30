import './DeleteRevertMember.modules.css'

const RevertWarning = ({ onAccept, onCancel }) => {
  return (
    <div className='final-restore-popup'>
      <div className='final-restore-content'>
        <h2>¿Desea Reestablecer al Miembro?</h2>
        <div className='button-final-restore-container'>
          <h3 className='final-restore-accept-button' onClick={onAccept}>Aceptar</h3>
          <h3 className='final-restore-cancel-button' onClick={onCancel}>Cancelar</h3>
        </div>
      </div>
    </div>
  );
};

export default RevertWarning;
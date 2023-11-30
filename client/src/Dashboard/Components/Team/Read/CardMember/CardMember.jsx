import "./CardMember.modules.css";
import ShaperImg from "../../../../../assets/Images/Icons/blankMember.jpg";
import LinkedinIcon from "../../../../../assets/Images/Icons/linkedin2.png";
import DeleteRevertMember from "../../Delete/DeleteRevertMember";
import { Link } from "react-router-dom";

const CardMember = ({ id, image, foreName, lastName, linkedIn, rolId, rol, isSuspended }) => {

  return (
    <div className="card">
      {
      !isSuspended
      ? <Link to={`/admin/equipo/${id}`}>
        <div className='member-image'>
          <p className='member-put-options-text'>Editar/Eliminar Miembro</p>
          <img src={image != null ? image : ShaperImg} alt={image} className="image" />
        </div>
      </Link>
      :<img src={image != null ? image : ShaperImg} alt={image} className="image" />
      }


      <div className='member-name-container'>
        <h2 className='member-name-text'>{foreName} {lastName}</h2>
        <h3 className='member-role'>{rol}</h3>
      </div>

      {
      isSuspended
      ? <div className='final-action-icons'>
            <DeleteRevertMember memberId={id} />
        </div>
      : null
      }
    </div>
    
  );
};

export default CardMember;


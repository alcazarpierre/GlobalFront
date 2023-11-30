import './CardMemberWeb.modules.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearDetails } from '../../../../redux/actionsMembers';
import MemberDetail from '../Detail/MemberDetail';

const CardMemberWeb = ({ id, image, foreName, lastName }) => {
  const dispatch = useDispatch();

  const [showMemberPopup, setShowMemberPopup] = useState(false);

  const handleMemberDetail = () => {
    setShowMemberPopup(true);
  }

  const closePopup = () => {
    setShowMemberPopup(false);
    dispatch(clearDetails());
  };

  return (
    <div className='card'>

      <div className='web-member-image' onClick={handleMemberDetail}>
        <p className='member-put-options-text'>Ver Detalles</p>
        <img src={image} className='image' alt={`Image of ${foreName} ${lastName}`} />
      </div>

      <div className='member-name-container'>
        <h2 className='web-member-name-text'>{foreName} {lastName}</h2>
      </div>

      {showMemberPopup && <MemberDetail id={id} onClose={closePopup} />}
    </div>
  )
}

export default CardMemberWeb

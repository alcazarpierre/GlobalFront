import './MemberDetail.modules.css';
import LinkedIcon from '../../../../assets/Images/Icons/linkedin.svg'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberDetails } from '../../../../redux/actionsMembers';

const MemberDetail = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const memberData = useSelector((state) => state.reducerMembers.memberDetails);
  const { foreName, lastName, rol, image, Posts, description, linkedIn } = memberData;

  useEffect(()=> {
    dispatch(getMemberDetails(id));
  },[dispatch, id]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('member-detail-overlay')) {
      onClose();
    }
  };

  return (
    <div className='member-detail-overlay' onClick={handleOverlayClick} >
      <div className='member-detail-container'>
        <span className='close-button' onClick={onClose}>&times;</span>

        <div className='image-linkedin-container'>
          <img src={image} className='member-detail-image' alt={`Image of ${foreName} ${lastName}`} />
          
          <div className='linked-icon-container'>
          <a href={linkedIn} target='_blank' rel='noopener noreferrer' >
              <img src={LinkedIcon} className='linked-icon' />
          </a>
          </div>
        </div>
        
        <div className='member-detail-content'>
          <div className='web-member-name'>
            <h3 className='web-member-forename'>{foreName}</h3>
            <h3 className='web-member-lastname'>{lastName}</h3>
          </div>

          <div className='web-member-role'>
            {rol && <p>{rol.name}</p>}
          </div>

          <div className='web-member-description'>
            <p>{description}</p>
          </div>

          <div className='web-posts-container'>
            {Posts && Posts.length > 0 && (
              <div>
                <p className='projects-memeber-text'>Proyectos en los que ha participado {foreName}:</p>
                <ul>
                  {Posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberDetail;
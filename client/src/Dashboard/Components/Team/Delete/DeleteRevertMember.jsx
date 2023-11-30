import './DeleteRevertMember.modules.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberDetails, updateMember, getShapers, getDeletedMembers, deleteMember } from '../../../../redux/actionsMembers';
import RevertWarning from './RevertWarning';
import DeleteWarning from './DeleteWarning';
import TrashIcon from '../../../../assets/Images/Icons/trashbin.png';
import RevertIcon from '../../../../assets/Images/Icons/refreshicon.png'

const DeleteRevertMember = ({ memberId }) => {
  const dispatch = useDispatch();
  const member = useSelector((state) => state.reducerMembers.memberDetails);

  const [showRevertPopup, setShowRevertPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const [formData, setFormData] = useState({
    foreName: '',
    lastName: '',
    rolId: '',
    postId: [],
    image: '',
    description: '',
    linkedIn: '',
    phone: '',
    email: '',
    registeredAt: '',
    isSuspended: false,
    isStarred: false,
  });

  useEffect(() => {
    setFormData({
      foreName: member.foreName,
      lastName: member.lastName,
      rolId: member.rolId,
      postId: member.postId || [],
      image: member.image,
      description: member.description,
      linkedIn: member.linkedIn,
      phone: member.phone,
      email: member.email,
      registeredAt: member.registeredAt,
      isSuspended: member.isSuspended,
      isStarred: member.isStarred,
    });
  }, [member]);

  const dispatchGetMemberDetails = async () => {
    await dispatch(getMemberDetails(memberId));
  };

  const updateLocalFormData = () => {
    setFormData((prevData) => ({
      ...prevData,
      isSuspended: !prevData.isSuspended,
    }));
  };

  const handleAcceptRevert = async () => {
    await dispatch(updateMember(memberId, formData));
    setShowRevertPopup(false);
    dispatch(getShapers());
    dispatch(getDeletedMembers());
  };

  const handleCancelRevert = () => {
    updateLocalFormData();
    setShowRevertPopup(false);
  };

  const handleAcceptDelete = async () => {
    await dispatch(deleteMember(memberId));
    setShowDeletePopup(false);
    await dispatch(getShapers());
    await dispatch(getDeletedMembers());
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const revertMember = async () => {
    await dispatchGetMemberDetails();
    updateLocalFormData();
    setShowRevertPopup(true);
  };

  const deleteMemberFromDB = () => {
    setShowDeletePopup(true);
  }


  return (
    <div>
      <form className='deleted-member-form-options' onSubmit={(event) => event.preventDefault()}>
        <div className='final-revert-icon' onClick={revertMember}>
          <img title='Reestrablecer Miembro' className='revert-action-icons' src={RevertIcon}  />
        </div>
        <div className='final-delete-icon' onClick={deleteMemberFromDB}>
          <img title='Eliminar del Sitema' className='trash-action-icons' src={TrashIcon}  />
        </div>
      </form>

      {showRevertPopup && (
        <RevertWarning 
          onAccept={handleAcceptRevert} 
          onCancel={handleCancelRevert} 
        />
      )}

      {showDeletePopup && (
        <DeleteWarning 
          onAccept={handleAcceptDelete} 
          onCancel={handleCancelDelete} 
        />
      )}
    </div>
  );
};

export default DeleteRevertMember;
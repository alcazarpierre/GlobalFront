import "./TeamContainer.modules.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShapers } from '../../../../../redux/actionsMembers';
import CardMember from '../CardMember/CardMember';
import OptionsBar from "../../OptionsBar/OptionsBar";


function TeamContainer () {
  const dispatch = useDispatch();
  const displayShapers = useSelector((state) => state.reducerMembers.displayMembers);

  useEffect(() => {
      dispatch(getShapers());
    }, [dispatch]);

    return (
      <div className='team-page'>
      <h1 className='team-title'>Equipo GlobalShapers Córdoba:</h1>
      <OptionsBar />
        <div className='team-members'>
          {displayShapers.map((member) => (
            <CardMember
              id = {member.id}
              key={member.id}
              foreName={member.foreName}
              lastName={member.lastName}
              rolId={member.rolId}
              rol={member.rol ? member.rol.name : 'Sin Rol'}
              linkedIn={member.linkedIn}
              image={member.image}
              isSuspended={member.isSuspended}
            />
          ))}
        </div>
      </div>
    );
};
    
    export default TeamContainer;
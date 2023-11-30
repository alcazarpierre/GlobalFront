import "./Equipoweb.modules.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShapers } from '../../../../redux/actionsMembers';
import CardMemberWeb from "../Card/CardMemberWeb";

const Equipoweb = () => {
  const dispatch = useDispatch();
  const displayMembers = useSelector((state) => state.reducerMembers.allShapers)

  useEffect(() => {
    dispatch(getShapers());
  },[dispatch])

  const activeMembers = displayMembers.filter((member) => member.rol.name !== 'Alumni');
  const alumniMembers = displayMembers.filter((member) => member.rol.name === 'Alumni');

  return (
    <div className='web-team-page'>
      <h1 className='web-team-title'>Equipo de Global Shapers Córdoba</h1>
      <h2 className='member-role-title'>Shapers</h2>
      <div className='web-team-members'>
        {activeMembers.map((member) => (
          <CardMemberWeb
            key={member.id}
            id={member.id}
            foreName={member.foreName}
            lastName={member.lastName}
            rol={member.rol.name}
            linkedIn={member.linkedIn}
            image={member.image}
          />
        ))}
        </div>

        <h2 className='member-role-title'>Alumnis</h2>
        <div className='web-team-members'>
          {alumniMembers.map((member) => (
            <CardMemberWeb
              key={member.id}
              id={member.id}
              foreName={member.foreName}
              lastName={member.lastName}
              rol={member.rol.name}
              linkedIn={member.linkedIn}
              image={member.image}
            />
          ))}
        </div>
    </div>
  );
};

export default Equipoweb;

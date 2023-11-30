import './Roles.modules.css';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getRoles, postRole, deleteRole } from "../../../../redux/actionsMembers";
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";

const Roles = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.reducerMembers.allRoles);

  const [newRole, setNewRole] = useState({
    name:'',
  });

  useEffect(() => {
    dispatch(getRoles());
  },[dispatch])
  
  const handleChange = (event) => {
    setNewRole (prevSate => ({
      ...prevSate,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(postRole(newRole));
    await dispatch(getRoles());
    setNewRole({name:''});
  }

  const handleDeleteRole = async (id) => {
      await dispatch(deleteRole(id));
      await dispatch(getRoles());
  }

  return (
    <div className='roles-container'>
      <Link to="/admin/equipo">
        <h3 className='go-back-team'>&lt;&lt; Regresar a Equipo</h3>
      </Link>
      <h1>Editar Roles</h1>
      <div className='create-read-role-container'>
        <div className='roles-create-container'>
        <h2 className='create-role-title'>Agregar Nuevo Rol:</h2>
          <input
            id='role-name' 
            type='text'
            name='name'
            value={newRole.name}
            onChange={handleChange}
          />
          <button 
            className='button-create-role'
            onClick={handleSubmit}
            >Crear</button>
        </div>
        
        <ul className='roles-list'>
        <h2 className='create-role-title'>Listado de Roles:</h2>
          {roles.map((rol) => (
              <h3
                className='displayed-role' 
                key={rol.id}>
                  {rol.name}
                  
                  <button 
                    className='button-delete-role' 
                    onClick={() => handleDeleteRole(rol.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
              </h3>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Roles

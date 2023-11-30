import './UpdateMember.modules.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMemberDetails, updateMember, getDeletedMembers, getRoles } from '../../../../redux/actionsMembers';
import { getAllProjects } from '../../../../redux/actionsProjects';
import ProyectosMiembro from '../Create/ProyectosMiembro';
import ImageHandler from '../../ImageHandler/ImageHandler';
import DeleteWarning from './DeleteWarning';
import UpdateWarning from './UpdateWarning';

const UpdateMember = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const member = useSelector((state) => state.reducerMembers.memberDetails);
    const projects = useSelector((state) => state.reducerProjects.allProjects);
    const showRoles = useSelector((state) => state.reducerMembers.allRoles);

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const [initialSelectedProjects, setInitialSelectedProjects] = useState([]);

    const [formData, setFormData] = useState ({
        foreName:'',
        lastName:'',
        rolId:'',
        postId:[],
        image:'',
        description:'',
        linkedIn:'',
        phone:'',
        email:'',
        registeredAt:'',
        isSuspended: false,
        isStarred: false
    });

    useEffect (() => {
        dispatch(getMemberDetails(id));
        dispatch(getAllProjects());
        dispatch(getRoles());
    },[dispatch, id]);

    useEffect (() => {

        const memberProyectosId =
        member.Posts && member.Posts.length > 0
          ? member.Posts.map((post) => post.id)
          : [];

        setInitialSelectedProjects(memberProyectosId);

        setFormData({
            foreName: member.foreName,
            lastName: member.lastName,
            rolId: member.rolId,
            postId:  memberProyectosId,
            image: member.image,
            description: member.description,
            linkedIn: member.linkedIn,
            phone: member.phone,
            email:member.email,
            registeredAt: member.registeredAt,
            isSuspended: member.isSuspended,
            isStarred: member.isStarred
        });

    },[member, projects]);


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleDelete = () => {
        setShowDeletePopup(true);
        setFormData({ ...formData, isSuspended: true });
      };
    
    const handleCancelDelete = () => {
    setShowDeletePopup(false);
    setFormData({ ...formData, isSuspended: false });
    };
    
    const handleConfirmDelete = async () => {
    setShowDeletePopup(false);
    await dispatch(updateMember(id, formData));
    await dispatch(getDeletedMembers());
    navigate('/admin/equipo');
    };

    const handleUpdateConfirm = async () => {
        setShowDeletePopup(false);
        navigate('/admin/equipo')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateMember(id, formData));
        setShowUpdatePopup(true);
    };

    const isFormValid = () => {
        return (
            // !errors.foreName &&
            // !errors.lastName &&
            // !errors.rolIde &&
            // !errors.postId &&
            // !errors.image &&
            // !errors.description &&
            // !errors.linkedIn &&
            // !errors.phone &&
            // !errors.email &&
            // !errors.registeredAt &&
            // !errors.isSuspended &&
            formData.foreName &&
            formData.lastName &&
            // formData.rolId &&
            // formData.postId &&
            formData.image &&
            formData.description &&
            formData.linkedIn &&
            formData.phone &&
            formData.email &&
            // formData.isSuspended &&
            formData.registeredAt
          );
    }

  return (
    <div className='form-page'>
        <div className='member-form-container'>
        <Link to="/admin/equipo">
            <h3 className='go-back-team'>&lt;&lt; Regresar a Equipo</h3>
        </Link>
        <h1>Actualizar Datos de Miembo:</h1>
        <br />
            <form className='member-form' onSubmit={handleSubmit}>
                <div className='inputs-image-container'>
                    <div className='name-input-container'>
                        <div className='name-input'>
                            <label htmlFor='foreName'>*Nombre: </label>
                            <input
                            id='foreName'
                            name='foreName'
                            type='text'
                            value={formData.foreName}
                            onChange={handleChange}
                            />
                            {/* {errors.foreName && <span>{errors.foreName}</span>} */}
                        </div>

                        <div className='email-input'>
                            <label htmlFor='email'>*Correo Electrónico: </label>
                            <input
                            id='email'
                            name='email'
                            type='text'
                            value={formData.email}
                            onChange={handleChange}
                            />
                            {/* {errors.email && <span>{errors.email}</span>} */}
                        </div>

                        <div className='linkedIn-input'>
                            <label htmlFor='linkedIn'>*LinkedIn: </label>
                            <input
                            id='linkedIn'
                            name='linkedIn'
                            type='text'
                            value={formData.linkedIn}
                            onChange={handleChange}
                            />
                            {/* {errors.linkedIn && <span>{errors.linkedIn}</span>} */}
                        </div>
                    </div>
                    <br />

                    <div className='email-phone-linkedIn-container'>

                        <div className='lastname-input'>
                            <label htmlFor='lastName'>*Apellido: </label>
                            <input
                            id='lastName'
                            name='lastName'
                            type='text'
                            value={formData.lastName}
                            onChange={handleChange}
                            />
                            {/* {errors.lastName && <span>{errors.lastName}</span>} */}
                        </div>

                        <div className='phone-input'>
                            <label htmlFor='phone'>*Teléfono: </label>
                            <input
                            id='phone'
                            name='phone'
                            type='text'
                            value={formData.phone}
                            onChange={handleChange}
                            />
                            {/* {errors.phone && <span>{errors.phone}</span>} */}
                        </div>

                        <div className='registeredAt-input'>
                            <label htmlFor='registeredAt'>*Miembro Desde: </label>
                            <input
                            id='registeredAt'
                            name='registeredAt'
                            type='date'
                            value={formData.registeredAt}
                            onChange={handleChange}
                            />
                            {/* {errors.registeredAt && <span>{errors.registeredAt}</span>} */}
                        </div>
                    </div>
                    <br />

                    <div className='image-input'>
                        <ImageHandler onImageChange={(imageUrl) => setFormData({ ...formData, image: imageUrl })} initialImageUrl={formData.image} />
                    </div>
                </div>

                <div className='roles-input-container'>
                    <div className='role-project-container'>
                        <div className='rol-list'>
                            <label htmlFor="rolId">*Rol: </label>
                            <select 
                                name='rolId' 
                                id='postId-select' 
                                value={formData.rolId} 
                                onChange={handleChange} 
                            >
                            <option value="">- Rol del miembro -</option>
                            {showRoles.map(selectedRole => 
                                <option key={selectedRole.id} value={selectedRole.id}>
                                {selectedRole.name}
                                </option>
                            )}  
                            </select>
                            {/* {errors.rolId && <span>{errors.rolId}</span>} */}
                        </div>

                        <div className='postId-Input'>
                            <label htmlFor='postId'>*Proyectos: </label>
                            <ProyectosMiembro onChange={handleChange} initialSelectedProjects={initialSelectedProjects} />
                            {/* {errors.postId && <span>{errors.postId}</span>} */}
                        </div>
                    </div>

                    <div className='description-input'>
                        <label htmlFor='description'>*Descripción: </label>
                        <textarea
                        id='description'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        />
                        {/* {errors.description && <span>{errors.description}</span>} */}
                    </div>
                </div>
       
                <div className='button-update-member'>
                    <button
                    className={isFormValid() ? 'member-update-enabled-button' : 'member-update-disabled-button'}
                    disabled={!isFormValid()}
                    onClick={handleSubmit}>Actualizar Datos
                    </button>

                    <button
                        type='button' 
                        className='member-delete-button'
                        onClick={handleDelete}>Eliminar Miembro
                    </button>

                    {showDeletePopup && (
                        <DeleteWarning
                            onCancel={handleCancelDelete}
                            onDelete={handleConfirmDelete}
                        />
                    )}
                    {showUpdatePopup && (
                        <UpdateWarning
                            onClose={handleUpdateConfirm}
                        />
                    )}
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateMember

import './CreateMember.modules.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'
import { postMember, getRoles } from '../../../../redux/actionsMembers';
import validate from './validations';
import ImageHandler from '../../ImageHandler/ImageHandler';
import ProyectosMiembro from './ProyectosMiembro';
import Confirmation from './Confirmation';


const CreateMember = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showRoles = useSelector((state) => state.reducerMembers.allRoles);

    const [showConfirmation, setShowConfirmation] = useState(false);
    
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

    const [errors, setErrors] = useState ({
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

    useEffect(() => {
        dispatch(getRoles());
    },[dispatch])

    const handleChange = (event) => {
        setFormData (prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        // setErrors (prevErrors => ({
        //     ...prevErrors,
        //     [event.target.name]: validate({ 
        //         ...formData, 
        //         [event.target.name]: event.target.value, 
        //     })  [event.target.name],
        // }));
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        let postMemberSuccess = false;

        try{
            await dispatch(postMember(formData));
            postMemberSuccess = true;
        } catch (error){
            alert(`Error: El miembro ya se encuentra en la base de datos o algunos datos son repetidos.`)
        }

        if (postMemberSuccess) {
            setShowConfirmation(true)

            setFormData({
                foreName:'',
                lastName:'',
                image:'',
                description:'',
                linkedIn:'',
                phone:'',
                email:'',
                registeredAt:'',
                isSuspended:false,
                isStarred:false,
                rolId:'',
                postId:[],
            });

            setErrors({
                foreName:'',
                image:'',
                description:'',
                linkedIn:'',
                phone:'',
                email:'',
                registeredAt:'',
                isSuspended:false,
                isStarred:false,
                lastName:'',
                rolId:'',
                postId:[],
            });
        }
    }

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
        navigate('/admin/equipo');
    };

  return (
    <div className='form-page'>
        <div className='member-form-container'>
        <Link to="/admin/equipo">
            <h3 className='go-back-team'>&lt;&lt; Regresar a Equipo</h3>
        </Link>
        <h1>Agregar nuevo miembro:</h1>
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
                            {errors.foreName && <span>{errors.foreName}</span>}
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
                            {errors.email && <span>{errors.email}</span>}
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
                            {errors.linkedIn && <span>{errors.linkedIn}</span>}
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
                            {errors.lastName && <span>{errors.lastName}</span>}
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
                            {errors.phone && <span>{errors.phone}</span>}
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
                            {errors.registeredAt && <span>{errors.registeredAt}</span>}
                        </div>
                    </div>
                    <br />

                    <div className='image-input'>
                        <ImageHandler onImageChange={(imageUrl) => setFormData({ ...formData, image: imageUrl })} />
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
                            <ProyectosMiembro onChange={handleChange} />
                            {errors.postId && <span>{errors.postId}</span>}
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
                        {errors.description && <span>{errors.description}</span>}
                    </div>
                </div>
                <br />
                <br />

                <div className='button-style'>
                    <button
                    className={isFormValid() ? 'member-enabled-button' : 'member-disabled-button'}
                    disabled={!isFormValid()}>Agrear Miembro
                    </button>
                </div>
            </form>
        </div>
        {showConfirmation && <Confirmation onClose={handleCloseConfirmation} />}
    </div>
  )
}

export default CreateMember
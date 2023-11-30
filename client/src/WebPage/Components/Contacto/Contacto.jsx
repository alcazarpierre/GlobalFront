import './Contacto.modules.css';
import FormImage from '../../../assets/Images/General/2.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendEmail } from '../../../redux/actionsEmail';
import SentConfirmationPopup from './ContactoConfirmacion';

const Contacto = () => {
    const dispatch = useDispatch();

    const [scrollPosition, setScrollPosition] = useState(0);
    const [messageSent, setMessageSent] = useState(false);

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    },[]);

    const parallaxStyle = {
        backgroundImage: `url(${FormImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100%'
    };

    const overlayStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(12 22 32 / 71%)'
    }
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleFormSubmit = (event) => {
        // console.log('Form Data:', formData);
        event.preventDefault();
        dispatch(sendEmail(formData));
        setMessageSent(true);

        setFormData({
            name:'',
            email:'',
            phone:'',
            message:''
        });
    }

    const handleCloseConfirmation = () => {
        setMessageSent(false);
    };

    return (
        <div id='webpage-contact-form' className='contact-from-container' style={parallaxStyle}>
            <div className="parallax-image" style={overlayStyle}>
                <h2 className='webpage-contact-form-title'>¿Hablamos?</h2>
                <div className='contact-form-contents-container'>
                    <div className='webpage-contact-form-left-column'>
                        <p className='intro-text'>
                        Si tenés una consulta, idea o ganas de colaborar generando
                        propuestas que creas que podamos impulsar desde Global Shapers
                        Córdoba, dejanos tus datos para que nuestro equipo pueda
                        contactarte.
                        </p>

                        <p className='other-hub-shaper'>¿Sos shaper de otro Hub? </p>

                        <p className='other-hub-shaper-invite'>
                        Si sos #shaper y te gustaría contactarnos o visitarnos, ¡esperamos
                        saber de vos!
                        </p>

                        <button className='button-shaper-hub'>
                            <a href={`mailto:globalshaperscordoba@gmail.com?subject=${encodeURIComponent('Soy Shaper de otro hub y me gustaría colaborar con ustedes!')}`}>
                                <strong>CONVERSA CON NOSOTRXS</strong>
                            </a>
                        </button>
                        {messageSent && <SentConfirmationPopup onClose={handleCloseConfirmation} />}
                    </div>

                    <div className='webpage-contact-form-right-column'>
                        <form className='bottom-contact-form' onSubmit={handleFormSubmit}>
                            <label id='label-contact-form' htmlFor='contact-name-lastname'>Nombre y Apellido:*</label>
                            <input id= 'input-contact-form' type='text' name='name' onChange={handleChange} value={formData.name} />

                            <label id='label-contact-form' htmlFor='contact-email'>Correo Electrónico:*</label>
                            <input id= 'input-contact-form' type='text' name='email' onChange={handleChange} value={formData.email} />

                            <label id='label-contact-form' htmlFor='contact-telephone'>Número de Teléfono:*</label>
                            <input id= 'input-contact-form' type='text' name='phone' onChange={handleChange} value={formData.phone} />

                            <label id='label-contact-form' htmlFor='contact-message'>¿Sobre Qué Te Gustaría Conversar?*</label>
                            <input id= 'input-contact-form' type='text' name='message' onChange={handleChange} value={formData.message} />
                            
                        <button className='botonplano' type='submit'>
                            <strong>ENVIAR</strong>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Contacto





const ContactInfoCard = ({id, address, phone, schedule, email}) => {

    return (
        <div className="nosotros-contact-info-container">
            <p>Dirección: {address}</p>
            <p>Numero: {phone}</p>
            <p>Horario: {schedule}</p>
            <p>Email: {email}</p>
        </div>
    
    );
} ;

export default ContactInfoCard;
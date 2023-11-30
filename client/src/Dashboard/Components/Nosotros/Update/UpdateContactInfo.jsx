import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getContactInfo, updateContactInfo } from "../../../../redux/actionFooter";

const UpdateContactInfo = () => {
    const dispatch = useDispatch();
    const info = useSelector((state) => state.reducerFooter.info)

    const [formData, setFormData] = useState({      
      address: "",
      phone: "",
      schedule: "",
      email: "",
    });

    useEffect (()=> {
      dispatch(getContactInfo);
  },[dispatch]);

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

    const handleFormSubmit = (event) => {
       event.preventDefault();
       dispatch(updateContactInfo(formData));
       setFormData(formData); 
     };
    
    return (
        <div>
            <h1>Actualizar info de contacto:</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="phone">Teléfono:</label>
                <input
                    type="number"
                    name="phone"
                    value={newContactInfo.phone}>
                    onChange={handleChange}
                </input>
                <label htmlFor="address">Dirección:</label>
                <input
                    type="text"
                    name="address"
                    value={newContactInfo.address}>
                    onChange={handleChange}
                </input>  
                <label htmlFor="email">Email:</label>              
                <input
                    type="text"
                    name="email"
                    value={newContactInfo.email}>
                    onChange={handleChange}
                </input>                
                <label htmlFor="schedule">Horario de atención:</label>
                <input
                    type="text"
                    name="schedule"
                    value={newContactInfo.schedule}>
                    onChange={handleChange}
                </input>
                <button type="submit">ACTUALIZAR</button>
            </form>
        </div>
    );
};

export default UpdateContactInfo;
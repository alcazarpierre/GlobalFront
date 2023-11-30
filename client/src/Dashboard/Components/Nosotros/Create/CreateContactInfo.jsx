import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateContactInfo,
  getContactInfo,
} from "../../../../redux/actionFooter";
import ContactInfoContainer from "../../../../WebPage/Components/FooterWPG/ContactInfoComponent/ContactInfoContainer";
import "./CreateContactInfo.modules.css";

const EditContactInfo = () => {
  const dispatch = useDispatch();
  const storedContactInfo = useSelector((state) => state.contactInfo);

  // Estado único para el formulario
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    schedule: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateContactInfo(formData));
    setFormData({
      address: "",
      phone: "",
      schedule: "",
      email: "",
    });
  };

  useEffect(() => {
    dispatch(getContactInfo());
  }, [dispatch]);

  return (
    <div className="contactmainContainer">
      <div className="contactformContainer">
        <div className="contactFormContainer">
        <h1 className="formTitle">Actualizar información de contacto:</h1>
          <form onSubmit={handleFormSubmit} className="contactform">
            <label htmlFor="phone" className="contactlabel">
              Teléfono:
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="contactinput"
            />
            <label htmlFor="address" className="contactlabel">
              Dirección:
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="contactinput"
            />
            <label htmlFor="email" className="contactlabel">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="contactinput"
            />
            <label htmlFor="schedule" className="contactlabel">
              Horario de Atención:
            </label>
            <input
              type="text"
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              className="contactinput"
            />
            <button type="submit" className="contactsubmitButton">
              ACTUALIZAR
            </button>
          </form>
        </div>
      </div>

      <div className="infoContainers">
        <div className="updatedInfoContainer">
          <h2>Información Actualizada:</h2>
          <p>
            <strong>Dirección:</strong>{" "}
            {formData.address ||
              (storedContactInfo && storedContactInfo.address) ||
              ""}
          </p>
          <p>
            <strong>Teléfono:</strong>{" "}
            {formData.phone ||
              (storedContactInfo && storedContactInfo.phone) ||
              ""}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {formData.email ||
              (storedContactInfo && storedContactInfo.email) ||
              ""}
          </p>
          <p>
            <strong>Horario de Atención:</strong>{" "}
            {formData.schedule ||
              (storedContactInfo && storedContactInfo.schedule) ||
              ""}
          </p>
        </div>

        <div className="updatedInfoContainer">
          <h2> Información Actual:</h2>
          <ContactInfoContainer
            contactInfo={storedContactInfo}
            onUpdate={dispatch(updateContactInfo)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditContactInfo;

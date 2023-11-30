import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createFaq } from '../../../../redux/actionsFaqs';
import { getFaqs } from '../../../../redux/actionsFaqs';

import "./CreateFaq.modules.css"


const FaqForm = () => {
    const dispatch = useDispatch();

    const initialState = {
        ask: '',
        answer: '',
    };

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState(initialState);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (value.length < 5) {
        setErrors({
            ...errors,
            [name]: `${name} debe tener al menos 5 caracteres`,
        });
    } else {
        setErrors({
            ...errors,
            [name]: "",
        });
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.ask.length < 5 || formData.answer.length < 5) {
      alert('Por favor, completa ambos campos con al menos 5 caracteres.');
      return;
    }

    await dispatch(createFaq(formData));

    dispatch(getFaqs());

    // alert('Pregunta Frecuente creada con éxito');

    setFormData(initialState);
  };

  return (
    <form className='createFaq-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ask">Nueva Pregunta:</label>
        <input
          type="text"
          id="ask"
          name="ask"
          value={formData.ask}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="answer">Respuesta:</label>
        <textarea
          id="answer"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FaqForm;

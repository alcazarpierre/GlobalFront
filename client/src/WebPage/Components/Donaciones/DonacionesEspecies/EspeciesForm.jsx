import React, { useState } from 'react';
import './EspeciesForm.modules.css'; 

const DonacionEnEspecies = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setNombre('');
    setApellido('');
    setTelefono('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit} className='especies-form'>
      <h3>Donacion En Especies</h3>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Apellido:
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Teléfono:
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Descripción de la Donación:
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </label>
      <br />

      <button type="submit">Enviar Donación</button>
    </form>
  );
};

export default DonacionEnEspecies;

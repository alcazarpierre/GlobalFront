import React from 'react';
import sombradonac from "../../../assets/Images/General/sombradonac.png";
import "./Donaciones.modules.css";


const Donaciones = () => {
  return (
    <div className='contdonac'>
      <div className='imagen-container'>
        <img className="sombradonac" src={sombradonac} alt="sombradonac"/>
      </div>
      <div className='contenido'>
        <h1 className='titulodonac'>¿CÓMO QUIERES APORTAR?</h1>
        <div className='botonesdonac'>
        <a className="botondonac" target="_blank" href="/colaborar/donacionunica"><strong>DONACION ÚNICA</strong></a>
        <a className="botondonac" target="_blank" href="https://donaronline.org/global-shapers-cordoba/dona-ahora"><strong>DONACIONES RECURRENTES</strong></a>
        <a className="botondonac" target="_blank" href="/colaborar/formespecies"><strong>DONACIONES EN ESPECIE</strong></a>
        <a className="botondonac" target="_blank" href="https://globalshaperscordoba.autogestion.io/paymentButton?pKey=bNMrUBugf6rDvfS"><strong>DONACIONES CORPORATIVAS</strong></a>
        <h1 className='titulodonac'>MUCHAS GRACIAS POR TU COLABORACIÓN</h1>
      </div>
      </div>
    </div>
  )
}

export default Donaciones;

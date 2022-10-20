import React from 'react'
import './Titulo.css'
import logo from '../Imagenes/senaLogo.jpg';

export const Titulo = () => {
  return (
    <div className='header'>
        <h1>Contador</h1>
        <img src={logo} className="senaLogo" alt="logo" />
    </div>

  )
}
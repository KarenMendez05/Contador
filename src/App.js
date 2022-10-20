import React from 'react'
import "../src/App.css"
import { Titulo } from './Componentes/titulo/index';
import { Botones } from './Componentes/botones/index';
import { Contador } from './Componentes//contador/index';

export const App = () => {
  return (
    <div>
      <Titulo/>
      <Contador/>
      <Botones/>
    </div>
  )
}

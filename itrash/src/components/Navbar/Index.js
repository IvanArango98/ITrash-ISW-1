import React, { useState } from "react";
import DrawerComponent from "./drawer";
import ToolbarComponent from "./toolbar";
import Prueba from './componentes/prueba'
import Prueba2 from './componentes/prueba2'

const Navbar = () => {   

    const [opciones,setOpciones] = useState(0)

  return (
    <div className="App">
      <ToolbarComponent 
      Opciones={opciones}
      setOpciones = {setOpciones}
      />    

      {
        opciones === 1 ?
        <Prueba/>
        :
        opciones === 2 ?  
        <Prueba2/>    :
        <h1>      
        Sin seleccionar
        </h1>   
      }  
    </div>
  );
};

export default Navbar;


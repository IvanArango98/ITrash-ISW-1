/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ToolbarComponent from "../SideBar/navbar";
import HorizontalLinearStepper from '../Stepper_Clientes/Index'


const Principal = () => {
  const [opciones, setOpciones] = useState(0);
  const [data_registro,setdata_registro] = useState([{name:"", email:"",pass:"",address:""}]);
  const [data_qr,setdata_qr] = useState([{value1:"", value2:"",value3:""}]);

  return (
    <div className="App">            
            <ToolbarComponent Opciones={opciones} setOpciones={setOpciones} />
            <br/>                    
            {
              opciones === 0 ?
              <h1>Bienvenidos</h1> : null
            }
            {
              opciones === 1 ?
              <HorizontalLinearStepper
              data_registro={data_registro}
              data_qr={data_qr}
              setdata_qr={setdata_qr}
              setdata_registro={setdata_registro}
              /> : null
            }            
            <br/>
          
  </div>
  );
};

export default Principal;

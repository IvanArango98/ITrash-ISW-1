/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import ToolbarComponent from "./NavBar";
import Formulario1 from "./formularios/Formulario1";
import Formulario2 from "./formularios/Formulario2";

const Principal = () => {
  const [opciones, setOpciones] = useState(0);

  return (
    <div className="App">
      <ToolbarComponent Opciones={opciones} setOpciones={setOpciones} />

      {opciones === 1 ? (
        <Formulario1 />
      ) : opciones === 2 ? (
        <Formulario2 />
      ) :  null}
    </div>
  );
};

export default Principal;

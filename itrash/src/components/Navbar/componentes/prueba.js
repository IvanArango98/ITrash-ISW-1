import React, { useState } from "react";


const Prueba = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="App">
      <h1>      
      hola soy la primera opcion
      </h1>      
    </div>
  );
};

export default Prueba;

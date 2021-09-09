import React, { useState } from "react";


const Prueba2 = () => {
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
          hola soy la segunda opcion
      </h1>      
    </div>
  );
};

export default Prueba2;

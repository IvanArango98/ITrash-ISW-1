import React from 'react'
import Imagen from './DIBUJO.JPG'

const Inicio = () => {
    return (
        <div>
            <img
            src={Imagen}      
            style={{height:"300px"}}      
            />            
            <p style={{fontSize:"20px",fontWeight:"800",marginTop:"30px"}}>
            Hagamos un mundo más limpio
            </p>
            <p>
            Con Itrash ayudas a la reducción de basura y optimización del tráfico. Ya no tendrás preocuparte por saber que días pasa el camión.
            </p>
        </div>
    )
}

export default Inicio;
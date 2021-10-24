import React from 'react'
import { Grid,TextField } from '@material-ui/core';
import Link from '@mui/material/Link';

const Registro = (props) => {
    const {data_registro,setdata_registro} = props

    function HandleChange(tipo,value) {
        let NuevaData = data_registro[0];
        NuevaData[tipo] = value;
        data_registro[0] = NuevaData;
        setdata_registro([...data_registro])
    }
    
    return (
        <div>
            <p style={{fontSize:"20px",fontWeight:"800",marginTop:"30px"}}>
                Registro
            </p>            

            <Grid container xs={12} md={12} lg={12} spacing={3}>

                <Grid item xs={12} md={6} lg={6}>
                <TextField
                fullWidth
                label={"Nombre de usuario"}
                variant="outlined"                
                value={data_registro[0]["name"]}
                onChange={e => {HandleChange("name",e.target.value)}}
                />    
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                <TextField
                fullWidth
                label={"Correo electronico"}
                variant="outlined"
                value={data_registro[0]["email"]}
                onChange={e => {HandleChange("email",e.target.value)}}
                />    
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                <TextField
                fullWidth
                label={"Contraseña"}
                type="password"
                variant="outlined"
                value={data_registro[0]["pass"]}
                onChange={e => {HandleChange("pass",e.target.value)}}
                />    
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                <TextField
                fullWidth
                label={"Dirección"}                
                variant="outlined"
                value={data_registro[0]["address"]}
                onChange={e => {HandleChange("address",e.target.value)}}
                />    
                </Grid>

                <Grid item xs={12} md={12} lg={12} style={{marginRight:"auto",marginLeft:"auto"}}>
                <Link href="/RegistrarCuenta" style={{color:"black",textDecorationColor:"black"}}>Ya tienes una cuenta? Ingresar</Link>
                </Grid>

            </Grid>
            
        </div>
    )
}

export default Registro;

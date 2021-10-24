import React from 'react'
import QRCode from "react-qr-code";
import { TextField,Button,Grid } from '@material-ui/core';


const CodigoQR = (props) => {

    const {data_qr,setdata_qr} = props
    const [Bandera,setBandera] = React.useState(false)
    
    function HandleChange(tipo,value) {
        let NuevaData = data_qr[0];
        NuevaData[tipo] = value;
        data_qr[0] = NuevaData;
        setdata_qr([...data_qr])
    }

    return (
        <div>
            <p style={{fontSize:"20px",fontWeight:"800",marginTop:"30px"}}>
                Codigo QR
            </p>         

            <p>
            Necesitamos unos cuantos datos para darte la bienvenida al futuro. 
            </p>         

            <br/> 
            <Grid container xs={12} md={12} lg={12} spacing={3}>             
            <Grid item xs={12} md={4} lg={4}>
                <TextField
                fullWidth
                label={"Titulo"}
                variant="outlined"                
                value={data_qr[0]["value1"]}
                onChange={e => {HandleChange("value1",e.target.value)}}
                />    
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                                    <TextField
                fullWidth
                label={"valor 2"}
                variant="outlined"                
                value={data_qr[0]["value2"]}
                onChange={e => {HandleChange("value2",e.target.value)}}
                />    
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                <TextField
                fullWidth
                label={"valor 3"}
                variant="outlined"                
                value={data_qr[0]["value3"]}
                onChange={e => {HandleChange("value3",e.target.value)}}
                />    
                </Grid>

                <Grid item xs={12} md={12} lg={12} style={{marginRight:"auto",marginLeft:"auto"}}>
                <Button onClick={() => setBandera(true)}
                style={{backgroundColor:"#403D39"}}
                variant="contained"
                color="primary"
                > Generar Codigo
                </Button>
                </Grid>
            </Grid>
            <br/><br/>
            {
                Bandera ?
                <QRCode 
                value={data_qr[0]["value2"] + " " +data_qr[0]["value3"]}
                title={data_qr[0]["value1"]}
                />
                : null
            }
        </div>
    )
}

export default CodigoQR;

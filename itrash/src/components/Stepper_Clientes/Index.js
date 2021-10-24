import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card,CardContent,Grid } from '@material-ui/core';
import Inicio from './Inicio'
import Registro from './Registro'
import CodigoQR from './CodigoQR'
const steps = ['Inicio','Generar Codigo QR','Ingreso de datos'];

export default function HorizontalLinearStepper(props) {          
  const {data_registro,setdata_registro,data_qr,setdata_qr} = props
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex)
  {
    switch(stepIndex) {
        case 0:
        return(<div> <Inicio/> </div>);

        case 1:
        return(<div><CodigoQR
          data_qr={data_qr}
          setdata_qr={setdata_qr}
        /></div>);        

        case 2:
        return(<div> <Registro data_registro={data_registro}
        setdata_registro={setdata_registro}/> </div>);
        
        default:
          return 'Paso no registrado.'
    }
  }

  return (
    <Grid  xs={11} md={10} lg={10} style={{marginLeft:"auto",marginRight:"auto"}}>
      <Card style={{backgroundColor:"#FFFCF2"}}>
      <CardContent> 
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <br/>
          <Typography sx={{ mt: 2, mb: 1 }} style={{fontWeight:"800"}}>
            Se ha registrado con exito!!!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset} style={{color:"black"}}>Reiniciar</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <br/><br/>
          <Typography sx={{ mt: 2, mb: 1 }}>
          <Grid container xs={12} md={12} lg={12}>
          <Grid item xs={12} md={10} lg={10}  style={{marginLeft:"auto",marginRight:"auto"}}>
            {getStepContent(activeStep)}
            </Grid>
            </Grid>
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Anterior
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button onClick={handleNext} style={{color:"black"}}>
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
            </Button>
          </Box>
        </React.Fragment>
      )}
      </CardContent>
      </Card>      
    </Grid>
  );
}

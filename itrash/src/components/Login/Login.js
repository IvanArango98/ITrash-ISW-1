import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {validate} from './schema'
import {useFormik,getIn,ErrorMessage,Field} from 'formik'
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { calculaExpiracionSesion } from '../helpers/helpers'
import { LaptopWindows } from "@material-ui/icons";
import {APIHOST as host} from '../../App.json'
import { isNull } from 'util'
import axios from 'axios'
import Cookies from 'universal-cookie'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" >
        {"Itrash 2021 - ISW1 "}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://i1.wp.com/metropolisanluis.com/wp-content/uploads/2016/01/camion-de-basura-dibujo.jpg?ssl=1)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const cookies = new Cookies();

  const classes = useStyles();
  const [valoresIniciales,setValoresIniciales] = useState({
    email: undefined,
    password: undefined
  })
  

  const iniciarSesion = (values) =>
  {
      axios.post(`${host}/Login`, 
      {   DireccionCorreo: values.email,
        Contraseña: values.password
      }).then( response => {
          if(isNull(response.data.token))
          {
              alert("Usuario y/o contraseña invalido")
          }
          else{
              cookies.set("_s",response.data.token,{
                  path: "/", 
                  expires: calculaExpiracionSesion()
              })

              localStorage.setItem("Usuario",JSON.stringify({
                UserName: values.email
            }))

              window.location.href = "/Main"
          }          
      }).catch(err => {
          console.error(err)                  
      })             
  }

  const formik = useFormik({
    initialValues: (valoresIniciales),
    onSubmit: (values) => {
      iniciarSesion(values)
    },
    validationSchema: validate
  })

  return (
      <formik onSubmit={formik.handleSubmit}>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
             margin="normal"
              id="email"
              label="Email Address"
              name="email" 
              variant="outlined"              
              required
              fullWidth                           
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            
            <TextField
             margin="normal"
              id="password"
              label="password"
              name="password" 
              variant="outlined"  
              type="password"            
              required
              fullWidth                           
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
              }}
            />        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar Sesión
            </Button>           
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </formik>
  );
}

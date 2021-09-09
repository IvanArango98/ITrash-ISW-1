import React,{useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/PeopleAltRounded";
import DrawerComponent from "./drawer";
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const {setOpciones,Opciones} = props
  const classes = useStyles();
  const [drawer,setdrawer] = useState(false)

  const toggleDrawer = (opcion) => {    
    if(opcion === 1)
    {
      setdrawer(true)
    }
    else{
      setdrawer(false)
    }    
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  

  return (<div>
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon 
        onClick={() => toggleDrawer(1)}
        />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        La imagen qlera
      </Typography>
      
      
      <AccountCircleIcon style={{marginRight:"10px"}}/>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Cerrar Sesión"
      />
      
   
    </Toolbar>
    </AppBar>
    <Drawer
      open={drawer}
      onClick={() => toggleDrawer(2)}
      style={{ width: "400px"}}
    >
      <DrawerComponent 
      Opciones={Opciones}
      setOpciones = {setOpciones}                   
      />         
    </Drawer>
  </div>)
}

export default NavBar;

import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Box from '@mui/material/Box';
import {Navbar,Nav,DropdownButton,Dropdown, Row, Col} from 'react-bootstrap'

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
  const { setOpciones, Opciones } = props;
  const classes = useStyles();
  const [NombreUsuario,setNombreUsuario] = useState('')
  const [drawer, setdrawer] = useState(false);

  const toggleDrawer = (opcion) => {
    if (opcion === 1) {
      setdrawer(true);
    } else {
      setdrawer(false);
    }
  };

  const history = useHistory();

  useEffect(() => {
    let usuario = JSON.parse(localStorage.getItem('Usuario'))
    setNombreUsuario(usuario.UserName)
  },[])

  function logout()
  {
      localStorage.clear()
      window.location.href = "/"
  }

  return (
    <div>      
      <AppBar position="static">              
        <Toolbar
        style={{backgroundColor:"#403D39",width:"100%"}}        
        >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(1)} 
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {"ITRASH"}
            <Divider />
          </Typography>          
          <DropdownButton drop="left">
                    <Dropdown.Header id="Dropdown-header">
                        <Row>
                        {"NOMBRE DE USUARIO: "}
                        </Row>
                        <Row>
                            {NombreUsuario}
                        </Row>                    
                    </Dropdown.Header> 
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item 
                        onClick={ () => logout()}                 
                    >CERRAR SESIÓN</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </DropdownButton>        
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawer}
        onClick={() => toggleDrawer(2)}
        style={{ width: "400px" }}
      >
        <Sidebar Opciones={Opciones} setOpciones={setOpciones} toggleDrawer_={toggleDrawer}/>
      </Drawer>
      
    </div>
  );
};

export default NavBar;
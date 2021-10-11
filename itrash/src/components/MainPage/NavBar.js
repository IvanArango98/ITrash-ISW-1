/* eslint-disable jsx-a11y/alt-text */
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
import AccountCircle from "@material-ui/icons/AccountCircle";
import Logo from "./formularios/Logo.png";

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

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={() => toggleDrawer(1)} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img src={Logo} style={{ width: "355px", height: "95px" }}></img>
            <Divider />
          </Typography>          
            <h4 style={{marginRight:"10px"}}>{NombreUsuario}</h4>
            <AccountCircle />          
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawer}
        onClick={() => toggleDrawer(2)}
        style={{ width: "400px" }}
      >
        <Sidebar Opciones={Opciones} setOpciones={setOpciones} />
      </Drawer>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Typography,
  Link,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AcUnitIcon from '@material-ui/icons/AcUnit';

const DrawerComponent = (props) => {
  const {setOpciones,Opciones} = props    
  const toggleDrawer = (opcion)  => {
    setOpciones(opcion)
  }
  return (
    <div style={{width:"250px"}} >
       <Typography align="center">
            <List>

              <ListItem>
                <Link to="/">
                  <ListItemText>
                    <Button color="secondary" onClick={() => toggleDrawer(1)}>
                      <HomeIcon /> Opcion 1
                    </Button>
                  </ListItemText>
                </Link>
              </ListItem>
              
              <ListItem>
                <Link to="/">
                  <ListItemText>
                    <Button color="secondary" onClick={() => toggleDrawer(2)}>
                      <AcUnitIcon /> Opcion 2
                    </Button>
                  </ListItemText>
                </Link>
              </ListItem>
              
            </List>
          </Typography>
     
    </div>
  );
};

export default (DrawerComponent);

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ChevronLeftIcon from '@mui/icons-material/ChevronRightOutlined';
import IconButton from '@mui/material/IconButton';

const Sidebar = (props) => {
  const { setOpciones,toggleDrawer_ } = props;
  const toggleDrawer = (opcion) => {
    setOpciones(opcion);
  };

  return (
    <div style={{ width: "250px",height:"100%",backgroundColor:"#FFFCF2"}}>
      <IconButton onClick={() => toggleDrawer_(2)} style={{marginLeft:"10px"}}>
              <ChevronLeftIcon />
            </IconButton>
      <Typography align="center">
        <List>
          <ListItem>
            <Link to="/">
              <ListItemText>
                <Button color="#403D39" onClick={() => toggleDrawer(1)}>
                  <QrCode2Icon style={{ marginRight: "5px"}} /> 
                  Registrar
                </Button>
              </ListItemText>
            </Link>
          </ListItem>
        </List>
      </Typography>
    </div>
  );
};

export default Sidebar;
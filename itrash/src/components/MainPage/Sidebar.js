import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FolderSharedIcon from "@material-ui/icons/FolderShared";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

const Sidebar = (props) => {
  const { setOpciones } = props;
  const toggleDrawer = (opcion) => {
    setOpciones(opcion);
  };
  return (
    <div style={{ width: "250px" }}>
      <Typography align="center">
        <List>
          <ListItem>
            <Link to="/">
              <ListItemText>
                <Button color="primary" onClick={() => toggleDrawer(1)}>
                  <ContactMailIcon style={{ marginRight: "5px" }} /> Formulario
                  1
                </Button>
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListItemText>
                <Button color="primary" onClick={() => toggleDrawer(2)}>
                  <FolderSharedIcon style={{ marginRight: "5px" }} /> Formulario
                  2
                </Button>
              </ListItemText>
            </Link>
          </ListItem>

          <ListItem>
            <Link to="/">
              <ListItemText>
                <Button color="primary" onClick={() => toggleDrawer(3)}>
                  <ImportContactsIcon style={{ marginRight: "5px" }} />
                  Formulario 3
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

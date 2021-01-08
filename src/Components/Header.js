import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     marginRight: theme.spacing(8),
//   },
// }));

export default function ButtonAppBar() {
  // const classes = useStyles();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>JAIDO</Navbar.Brand>
      <Navbar.Brand href="#home">Car</Navbar.Brand>
      <Navbar.Brand href="#home">House</Navbar.Brand>
    </Navbar>
  );
}

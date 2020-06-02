import React, { Component } from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import { Form, Button, FormControl, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
const imgone = require('../../assets/logo.png');

class BootstrapNavbar extends Component {
    render() {
        return (
    <>
    <div  id="color-nav">
    <Navbar expand="lg"  bg="light" fixed="top" >
    <Navbar.Brand href="#"><img src={imgone} alt="logo"  className="logo"  style={{width:"100px" , hieght:"70px"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"     id="basic-nav">Home</Nav.Link>
      <Nav.Link href="#services" id="basic-nav">Services</Nav.Link>
      <Nav.Link href="#Team"     id="basic-nav">Team</Nav.Link>
      <Nav.Link href="#contactUs" id="basic-nav">Contact Us</Nav.Link>
    </Nav>
      <Button variant="outline-dark" style={{ padding:"5px 25px" ,fontSize:"16px" ,fontWeight:"600",borderRadius:"20px",marginRight:"20px"}}>Sign Up</Button>
      <Button variant="outline-dark" style={{ padding:"5px 25px" ,fontSize:"16px" ,fontWeight:"600",borderRadius:"20px"}}>Log In</Button>
    </Navbar.Collapse>
    </Navbar>
    </div>
    </>
        );
    }
}

export default BootstrapNavbar;
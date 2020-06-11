import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import {  withRouter } from "react-router-dom";
import { Nav, Navbar ,Button } from "react-bootstrap";
import { ItemContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes";
import './App.css';


const imgone = require('./assets/logo.png');

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push("/login");
  }
  return (
    
     !isAuthenticating && (
    <div  id="color-nav">
    <Navbar expand="lg"  bg="light" fixed="top" >
    <Navbar.Brand href="#"><img src={imgone} alt="logo"  className="logo"  style={{width:"100px" , hieght:"70px"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"      id="basic-nav">Home</Nav.Link>
      <Nav.Link href="#services"  id="basic-nav">Services</Nav.Link>
      <Nav.Link href="#Team"      id="basic-nav">Team</Nav.Link>
      <Nav.Link href="#contactUs" id="basic-nav">Contact Us</Nav.Link>
    </Nav>
    <Nav>
              {isAuthenticated ? (
                <>
                  <Button variant="outline-dark" style={{ padding:"5px 25px" ,fontSize:"16px" ,fontWeight:"600",borderRadius:"20px",marginRight:"20px"}} onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Button variant="outline-dark" style={{ padding:"5px 25px" ,fontSize:"16px" ,fontWeight:"600",borderRadius:"20px",marginRight:"20px" }} onClick={() => props.history.push('/signup')}>Sign Up</Button>
                  <Button variant="outline-dark" style={{ padding:"5px 25px" ,fontSize:"16px" ,fontWeight:"600",borderRadius:"20px"}} onClick={() => props.history.push('/login')}>Log In</Button>
                </>
              )}
    </Nav>

    </Navbar.Collapse>
    </Navbar>
           <Routes appProps={{ isAuthenticated, userHasAuthenticated }} /> 
    </div>
  )
  );
}

export default withRouter(App);

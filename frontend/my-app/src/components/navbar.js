import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class Navigationbar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <LinkContainer to="/home">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/lists">
                      <Nav.Link>Lists</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/parts">
                      <Nav.Link>Parts</Nav.Link>
                    </LinkContainer>
                    
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        )
    }
}
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://template-riptide.s3.us-west-1.amazonaws.com/riptide-logo-OLD-white.png"
                        width="125"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Riptide Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/directions">Directions</Nav.Link>
                        <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
                        <Nav.Link as={Link} to="/inquiries">Booking Inquiries</Nav.Link>
                        <Nav.Link as={Link} to="/photos">Bar Photos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

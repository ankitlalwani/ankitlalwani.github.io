import React,{Component} from "react";
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';


class AppNav extends Component {

    render() { 
        return ( 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Ankit Lalwani</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href={this.handleOnClick}>About</Nav.Link>
                <Nav.Link href="/">Experience</Nav.Link>
                <Nav.Link href="/">Education</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Expense Tracker</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Tennis Portal</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shopping Cart</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">All Projects</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Skills</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/">Contact</Nav.Link>
                <Nav.Link href="/">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

         );
    }
}

 
export default AppNav;
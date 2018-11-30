import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

export default class Navigation extends Component {
  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>React-Bootstrap</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link to='/gitrepos' className='nav__link' style={{ textDecoration: 'none' }}>Git Repos</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

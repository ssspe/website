import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

export default class Navigation extends Component {

  state = {
    className: 'navbar__big'
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
   var lastScrollY = window.scrollY;
   if (lastScrollY > 40) {
     this.setState({className: 'navbar__small'})
   } else {
     this.setState({className: 'navbar__big'})
   }
 }

  render() {
    return(
      <Navbar className={this.state.className}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Spencer's Website</Link>
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

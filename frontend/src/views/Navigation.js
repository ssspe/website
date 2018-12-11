import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'navbar__big'
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
   if (window.scrollY > 40) {
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

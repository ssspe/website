import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
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
        <div className='navbar__header'>
          <Link to='/' className='nav__header' style={{ textDecoration: 'none' }}>Spencer's Website</Link>
        </div>
        <div className='navbar__item'>
          <Link to='/gitrepos' className='nav__item' style={{ textDecoration: 'none' }}>Git Repos</Link>
          <Link to='/cv' className='nav__item' style={{ textDecoration: 'none' }}>CV</Link>
        </div>
      </Navbar>
    );
  }
}

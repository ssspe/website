import React, { Component } from 'react';
import '../styles/Footer.css'
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
  render() {
    return(
      <div className='footer'>
        <SocialIcon className='icons' url="https://www.linkedin.com/in/spencer-robertson-089442115/" />
        <SocialIcon className='icons' url="https://www.facebook.com/spencer.robertson.9" />
      </div>
    );
  }
}
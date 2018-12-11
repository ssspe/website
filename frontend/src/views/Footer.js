import React, { Component } from 'react';
import '../styles/Footer.css'
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component {
  render() {
    return(
      <div className='footer'>
        <SocialIcon className='social__icons' url="https://www.linkedin.com/in/spencer-robertson-089442115/" />
        <SocialIcon className='social__icons' url="https://www.facebook.com/spencer.robertson.9" />
        <SocialIcon className='social__icons' url="https://github.com/ssspe" />
        <a href="mailto:spencer.robertson@zirconsoftware.co.uk">
          <SocialIcon className='social__icons' network="email"/>
        </a>
      </div>
    );
  }
}

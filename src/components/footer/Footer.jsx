import React from 'react';
import "./footer.css"
import {RiFacebookCircleLine} from 'react-icons/ri';
import {FiInstagram} from 'react-icons/fi';
import {SlSocialTwitter} from 'react-icons/sl';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SKI-TECH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><RiFacebookCircleLine/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><SlSocialTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy, Ski-Technologies, All Right Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
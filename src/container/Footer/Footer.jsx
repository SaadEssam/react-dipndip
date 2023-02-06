import React from 'react';
import './Footer.css';
import images from '../../constants/images';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="app_footer section_padding" id="contact">
      <div className="app_footer-links">
        <div className="app_footer-links_contact">
          <h1 className="app_footer-headtext">Contact Us</h1>
          <p className="p_ubuntu">2020 Winston Park Drive. Suite 200 Oakville, Ontario L6H 6X7</p>
          <p className="p_ubuntu">Info@dipndip.com</p>
          <p className="p_ubuntu">+1 468-471-2434</p>
        </div>
        <div className="app_footer-links_logo">
          <img src={images.dipndip} alt="footer_dipndip" />
          <p className="p_ubuntu">Follow Us:</p>
          <div className="app_footer-links_icons">
            <a href="https://facebook.com/" target='_blank' rel="noopener noreferrer">
              <FiFacebook />
            </a>
            <a href="https://twitter.com/" target='_blank' rel="noopener noreferrer">
              <FiTwitter />
            </a>
            <a href="https://instagram.com/" target='_blank' rel="noopener noreferrer">
              <FiInstagram />
            </a>
            <a href="https://youtube.com/" target='_blank' rel="noopener noreferrer">
              <FiYoutube />
            </a>
          </div>
        </div>
        <div className="app_footer-links_work">
          <h1 className="app_footer-headtext">Working Hours</h1>
          <p className="p_ubuntu">Monday-Friday:</p>
          <p className="p_ubuntu">08:00 am - 12:00 am</p>
          <p className="p_ubuntu">Saturday-Sunday:</p>
          <p className="p_ubuntu">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer_copyright">
        <p className="p_ubuntu">&copy; {new Date().getFullYear()} DipnDip. All Rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { MdMailOutline } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => {
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.dipndip} alt="app logo" />
      </div>
      <ul className="app_navbar-links">
        <li className="p_opensans"><a href="#home">Home</a></li>
        <li className="p_opensans"><a href="#about">About</a></li>
        <li className="p_opensans"><a href="#menu">Menu</a></li>
        <li className="p_opensans"><a href="#awards">Awards</a></li>
        <li className="p_opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app_navbar-right">
        <a href="#email" className="p_opensans email"><MdMailOutline fontSize={17} />Info@dipndip.com</a>
        <div />
        <a href="#/" className="p_opensans">Book Table</a>
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}}/>
      </div>
    </nav>
  )
}

export default Navbar
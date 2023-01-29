import React, { useState } from 'react';
import './Navbar.css';
import { TiThMenuOutline } from 'react-icons/ti';
import { IoRestaurantOutline } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.dipndip} alt="app logo" />
      </div>
      <ul className="app_navbar-links">
        <li className="p_ubuntu"><a href="#home">Home</a></li>
        <li className="p_ubuntu"><a href="#about">About</a></li>
        <li className="p_ubuntu"><a href="#menu">Menu</a></li>
        <li className="p_ubuntu"><a href="#blog">Blog</a></li>
        <li className="p_ubuntu"><a href="#gallery">Gallery</a></li>
        <li className="p_ubuntu"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app_navbar-right">
        <a href="#email" className="p_ubuntu email"><MdMailOutline />Info@dipndip.com</a>
        <div />
        <a href="#" className="p_ubuntu">Book Table</a>
      </div>
      <div className="app_navbar-smallscreen">
        <TiThMenuOutline color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex_center slide-left">
            <IoRestaurantOutline fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
            <ul className="app_navbar-smallscreen_links">
              <li className="p_ubuntu"><a href="#home">Home</a></li>
              <li className="p_ubuntu"><a href="#about">About</a></li>
              <li className="p_ubuntu"><a href="#menu">Menu</a></li>
              <li className="p_ubuntu"><a href="#awards">Awards</a></li>
              <li className="p_ubuntu"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
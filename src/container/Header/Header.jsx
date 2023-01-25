import React from 'react';
import './Header.css';
import images from '../../constants/images';

const Header = () => {
  return (
    <div className="app_header app_wrapper section_padding" id="home">
      <div className="app_wrapper_info">
        {/* <SubHeading title="chase the new flavor" /> */}
        <h1 className="app_header-h1"><span>Who</span><br /> We Are</h1>
        <p className="p_ubuntu" style={{ margin: '2rem 0'}}>The first dipndip chocolate cafe was 
        founded in 2009. Since then, we’ve spread our deliciousness to 18 countries worldwide and 146 
        locations!&nbsp;<br />Treat yourself to high-quality European chocolate at dipndip.</p>
        <button type="button" className="custom_button">Explore Menu</button>
      </div>

      <div className="app_wrapper_img">
        <img src={images.welcome} alt="Header welcome"/>
      </div>
    </div>
  );
}

export default Header;
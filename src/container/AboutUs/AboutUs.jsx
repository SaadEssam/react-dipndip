import React from 'react';
import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => {
  return (
    <div className="app_aboutus app_bg flex_center section_padding" id="about">

      <div className="app_aboutus-content flex_center">
        <div className="app_aboutus-content_about">
          <h1 className="headtext_Aboreto">Our Vision</h1>
          <p className="p_ubuntu">We use only the finest Belgian chocolates for our sweet treats.
          Our collection of amazing desserts will satisfy your craving for something sweet.</p>
          <button type="button" className="custom_button">Read More</button>
        </div>

        <div className="app_aboutus-content_img flex_center">
          <img src={images.center} alt="Center"/>
        </div>
        <div className="app_aboutus-content_mission">
          <h1 className="headtext_Aboreto">Our Mission</h1>
          <p className="p_ubuntu">To Become The Number One Chocolate Cafe In The World. We 
          want you to smile at every touch point, from the taste sight of our decadent desserts.</p>
          <button type="button" className="custom_button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
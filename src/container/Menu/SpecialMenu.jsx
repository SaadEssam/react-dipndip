import React from 'react';
import './SpecialMenu.css';
import MenuItem from '../../components/MenuItem/MenuItem'
import images from '../../constants/images';
import data from '../../constants/data';


const SpecialMenu = () => {
  return (
    <div className="app_specialMenu flex_center section_padding" id="menu">
      <div className="app_specialMenu-title">
        <h1 className="headtext_Aboreto">Special Menu</h1>
      </div>

      <div className="app_specialMenu-menu">
        <div className="app_specialMenu-menu_left flex_center">
          <p className="app_specialMenu-menu_heading">Crepes & Waffles</p>
          <div className="app_specialMenu-menu_items">
            {data.crepes.map((crepe, index) => (
              <MenuItem key={crepe.title + index} title={crepe.title} price={crepe.price} tags={crepe.tags} />
            ))}
          </div>
        </div>

        <div className="app_specialMenu-menu_img">
          <img src={images.menu} alt="Menu" />
        </div>

        <div className="app_specialMenu-menu_right flex_center">
          <p className="app_specialMenu-menu_heading">milkshakes & Beverages</p>
          <div className="app_specialMenu-menu_items">
            {data.Beverages.map((Beverage, index) => (
              <MenuItem key={Beverage.title + index} title={Beverage.title} price={Beverage.price} tags={Beverage.tags} />
            ))}
          </div>
        </div>

      </div>
      <div className="Menu-button">
        <button type="button" className="custom_button">View More</button>
      </div>
    </div>
  );
}

export default SpecialMenu;
import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app_menuitem">
    <div className="app_menuitem-head">
      <div className="app_menuitem-name">
        <p className="p_Aboreto item-name">{title}</p>
      </div>
      <div className="app_menuitem-dash" />
      <div className="app_menuitem-price">
        <p className="p_Aboreto">{price}</p>
      </div>
    </div>

    <div className="app_menuitem-sub">
      <p className="p_ubuntu subitem-name">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
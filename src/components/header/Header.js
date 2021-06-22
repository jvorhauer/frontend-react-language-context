import React from 'react';
import {NavLink} from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import './Header.css';
import {LangContext} from '../../context/LangContextProvider';
import Switcher from "../switcher/Switcher";

function Header() {

  const {getText} = React.useContext(LangContext);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about-us">
                {getText('header.menuItems.aboutUs')}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {getText('header.menuItems.allPlants')}
              </NavLink>
            </li>
            <li className="language-switch">
              <Switcher />
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header" className="header-image" />
          <h1>{getText('header.title')}</h1>
        </div>
      </header>
    </>
  );
}

export default Header;

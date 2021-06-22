import React from 'react';
import writers from '../../assets/bob_betsy.jpg';
import {LangContext} from '../../context/LangContextProvider';

function AboutUs() {

  const {getText} = React.useContext(LangContext);

  return (
    <div className="page-container">
      <h2>{getText('aboutUs.title')}</h2>
      <p>Dit is je profielpagina!</p>
      <img src={writers} alt="Bob & Betsy"/>
      <p>{getText('aboutUs.writers')}</p>
    </div>
  );
}

export default AboutUs;

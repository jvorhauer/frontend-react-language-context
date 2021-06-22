import React from 'react';
import content from '../../data/content.json';
import {LangContext} from '../../context/LangContextProvider';

function Home() {

  const {getText} = React.useContext(LangContext);

  return (
    <div className="page-container">
      <h2>{getText('home.title')}</h2>
      <p>{getText('home.introText')}</p>
    </div>
  );
}

export default Home;

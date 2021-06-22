import React from 'react';
import {LangContext} from '../../context/LangContextProvider';

function AllPlants() {

  const {getText, getNode} = React.useContext(LangContext);

  return (
    <div className="page-container">
      <h2>{getText('plants.title')}</h2>
      <p>{getText('plants.text')}</p>
      <ul>
        {getNode('plants').plants.map((plant) => <li>{plant}</li>)}
      </ul>
    </div>
  );
}

export default AllPlants;

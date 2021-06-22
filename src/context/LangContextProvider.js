import React from 'react';
import getContent from './getContent';

export const LangContext = React.createContext(null);

function LangContextProvider({ children }) {

  const [selectedLanguage, setSelectedLanguage] = React.useState("nl");

  function setDutch() {
    console.log("setDutch");
    setSelectedLanguage("nl");
  }

  function setSpanish() {
    console.log("setSpanish");
    setSelectedLanguage("es");
  }

  function getText(key) {
    const arr = getContent(selectedLanguage, key);
    return arr.length > 0 ? arr[0] : "???";
  }

  function getNode(key) {
    console.log("getNode:", key);
    return getContent(selectedLanguage, key)[0];
  }

  return (
    <LangContext.Provider value={{
      setDutch: setDutch,
      setSpanish: setSpanish,
      getText: getText,
      getNode: getNode,
    }}>
      { children }
    </LangContext.Provider>
  );
}

export default LangContextProvider;

import React from "react";
import { LangContext } from "../../context/LangContextProvider";
import { ReactComponent as FlagNL } from "../../assets/netherlands.svg";
import { ReactComponent as FlagES } from "../../assets/spain.svg";

const Switcher = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState(true);
  const context = React.useContext(LangContext);

  React.useEffect(() => {
    if (selectedLanguage) {
      context.setDutch();
    } else {
      context.setSpanish();
    }
  }, [context, selectedLanguage]);

  return (
    <>
      {!selectedLanguage && (
        <FlagNL onClick={() => setSelectedLanguage(true)} />
      )}
      {selectedLanguage && (
        <FlagES onClick={() => setSelectedLanguage(false)} />
      )}
    </>
  );
};

export default Switcher;

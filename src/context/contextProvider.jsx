import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const savedSelectedLanguage = localStorage.getItem("selectedLanguage");
  const [selectedLanguage, setSelectedLanguage] = useState(
    savedSelectedLanguage || "fr"
  );

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <MyContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </MyContext.Provider>
  );
};

export const useAppContext = () => React.useContext(MyContext);

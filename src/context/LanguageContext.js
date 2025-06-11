import { createContext, useContext, useState, useEffect } from "react";
import { languages } from "../config/language";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("IT-IT");

  useEffect(() => {
    AsyncStorage.getItem("selectedLanguage").then((value) => {
      if (value) {
        setSelectedLanguage(value);
      }
    });
  }, []);

  async function changeSelectedLanguage(value) {
    setSelectedLanguage(value);
    await AsyncStorage.setItem("selectedLanguage", value);
  }

  function translate(key) {
    return languages[selectedLanguage][key];
  }

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, translate, changeSelectedLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

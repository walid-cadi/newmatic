import React from "react";
import { useAppContext } from "../context/contextProvider";

const TransText = ({ fr, en, ar }) => {
  const { selectedLanguage } = useAppContext();

  const texts = { fr, en, ar };

  return texts[selectedLanguage];
};

export default TransText;

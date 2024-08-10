import React, { createContext, useState, useContext } from "react";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState({ loginForm: false, Map: false });
  return <PopupContext.Provider value={{ popup, setPopup }}>{children}</PopupContext.Provider>;
};

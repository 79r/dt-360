import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const appContext = createContext();

const AppProvider = ({ children }) => {
  const [imageSelected, setImageSelected] = useState(null);
  return (
    <appContext.Provider
      value={{
        imageSelected,
        setImageSelected,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useApp = () => {
  return useContext(appContext);
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;

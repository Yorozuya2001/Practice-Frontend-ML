import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [value, setValue] = useState("");

  return (
    <MyContext.Provider value={{ items, setItems, value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

MyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

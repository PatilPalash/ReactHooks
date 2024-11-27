import { createContext } from "react";

export const ExContext = createContext();

const ContextProvider = ({ children }) => {
  const phone = "+1-126-467-5454"; // Normalized phone format
  const name = "bgdfgdg"; // Normalized phone format
  return (
    <ExContext.Provider value={{phone,name}}>
      {children}
    </ExContext.Provider>
  );
};

export default ContextProvider;

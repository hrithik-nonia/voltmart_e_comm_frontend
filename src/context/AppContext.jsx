import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <>
      <AppContext.Provider value={{}}>{children}</AppContext.Provider>
    </>
  );
};

// eslint-disable-next-line
export const useAppProvider = () => useContext(AppContext);

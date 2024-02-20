import { useState, createContext } from "react";

export const NameContext = createContext();

const Mainprovider = ({ children }) => {
  const [name, setName] = useState("Sainjargal");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
export default Mainprovider;

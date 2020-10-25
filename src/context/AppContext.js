import React, { useContext } from "react";

const defaultValues = { color: "green" };
const AppContext = React.createContext(defaultValues);
export const useAppContext = () => useContext(AppContext);

export default AppContext;

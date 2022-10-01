import { createContext, useState } from "react";


export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [ theme, setTheme ] = useState("light");
    const toggleTheme = () => {
        setTheme(theme==="dark" ? "light" : "dark");
    }
return <AppContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>{children}</AppContext.Provider>
}

export default AppContextProvider;
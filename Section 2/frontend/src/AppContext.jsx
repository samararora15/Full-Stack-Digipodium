import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    //sharable things inside AppProvider
    const [loggedin, setloggedin] = useState(false);

    return <AppContext.Provider value={{loggedin,setloggedin}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {return useContext(AppContext)}

export default useAppContext;
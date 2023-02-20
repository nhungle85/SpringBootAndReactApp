import { createContext, useState, useContext } from "react";

//create a Context
export const AuthContext = createContext();

//Share the created context with other components
export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const valueToShare = {currentUser, setCurrentUser, isAuthenticated, setAuthenticated};

    //add api call to login

    //add api call to logout

    //export to share value

    return (
        <AuthContext.Provider value={valueToShare}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook for Auth
export const useAuth = () => useContext(AuthContext);
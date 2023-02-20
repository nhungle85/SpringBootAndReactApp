import { createContext, useState, useContext } from "react";

//create a Context
export const AuthContext = createContext();

//Share the created context with other components
export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);
    
    //add api call to login
    function handleLogin(username, password) {
        if(username === 'Nhung' && password === '123') {
            setCurrentUser({username: username, password: password});
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            return false;
        }
    }

    //add api to call logout
    function handleLogout() {
        setCurrentUser(null);
        setAuthenticated(false);
    }

    //export to share value
    const valueToShare = {currentUser, setCurrentUser, isAuthenticated, setAuthenticated, handleLogin, handleLogout};

    return (
        <AuthContext.Provider value={valueToShare}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook for Auth
export const useAuth = () => useContext(AuthContext);
import { createContext, useState, useContext } from "react";
import { apiClient } from "../TodoApp/api/ApiClient";
import { executeBasicAuth, sayHello } from "../TodoApp/api/TodoListService";

//create a Context
export const AuthContext = createContext();

//Share the created context with other components
export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);
    
    //add api call to login
    async function handleLogin(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password);
        try {
            const response = await executeBasicAuth(baToken);
    
            if(response.status === 200) {
                setToken(baToken);
                setCurrentUser(username);
                setAuthenticated(true);

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('interception and adding token to request header');
                        config.headers.Authorization = baToken;

                        return config;
                    }
                )
                
                return true;
            } else {
                handleLogout();
            }
        } catch (e) {
            handleLogout();
        }
        return false;
    }

    //add api to call logout
    function handleLogout() {
        setCurrentUser(null);
        setAuthenticated(false);
        setToken(null);
    }

    //export to share value
    const valueToShare = {token, currentUser, setCurrentUser, isAuthenticated, setAuthenticated, handleLogin, handleLogout};

    return (
        <AuthContext.Provider value={valueToShare}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook for Auth
export const useAuth = () => useContext(AuthContext);
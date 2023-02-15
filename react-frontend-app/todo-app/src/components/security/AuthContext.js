import { createContext, useState } from "react";

const loginUser = {
    username: '',
    password: ''
}

//create a Context
export const AuthContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

//Put some state in the context object


//Share the created context with other components
export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
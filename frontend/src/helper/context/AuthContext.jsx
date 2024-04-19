import { createContext, useContext, useState } from "react"

 
const AuthContext = createContext(null);

export const authProvider = ({ children }) => {
    const [isUser, setIsUser] = useState(initialState);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        console.log(login);
    }

    const signin = () => {
        console.log(signin);
    }

    const value = [
        login,
        signin,
        isLoggedIn,
        isUser,
    ];

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

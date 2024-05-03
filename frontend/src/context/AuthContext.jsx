import { createContext, useContext, useState } from "react"
import { userLogin, userSignup } from '../helper/api-communicator'

 
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // const [isUser, setIsUser] = useState(initialState);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (email, password) => { 
        const res = await userLogin(email, password) 
        if (res) {
            console.log('true')
        }
    }

    const signup = async(name, email, password, selectrole, profilepicture) => {
        const res = await userSignup(name, email, password, selectrole, profilepicture) 
        if (res) {
            console.log('true')
        }
    }

    const value = {
        login,
        signup,
        // isLoggedIn,
        // isUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

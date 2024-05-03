import axios from "axios";

export const userSignup = async (name, email, password, selectrole, profilepicture ) => {
    const res = axios.post('/user/signup', name, email, password, selectrole, profilepicture);
    try {
        if (res.status !== 200) {
            throw new Error("Unable to signup")
        }
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const userLogin = async (email, password ) => {
    const res = axios.post('/user/login', email, password);
    try {
        if (res.status !== 200) {
            throw new Error("Unable to Login")
        }
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}
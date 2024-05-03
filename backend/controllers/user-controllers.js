import { User } from '../models/user.js'
import bcrypt from "bcrypt"
import { createToken } from '../utils/tokenManager.js'

export const getAllUsers = async (req, res) => {
    //we need to find the user to display
    try {
        const user = await User.find();
        return res.status(200).send({ message: "OK",  user})
    } catch (error) {
        console.log(error);
        return res.status(200).send({ message: "Error", cause: error.message });
    }
}
export const userSignup = async(req, res) => {
    try {
        const { name, email, password, selectrole, profilepicture} = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(401).send("User already registered");
        }

        const user = new User({ name: name, email: email, password: hashPassword, selectrole, profilepicture })
        await user.save();
        res.status(200).json({ message: "SignIn Success", user })

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error user cant signin", cause: error.message });
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("User is not registered");
        }
        const confirmPassword = await bcrypt.compare(password, user.password);
        if (!confirmPassword) {
            return res.status(401).send("Password is incorrect");
        }
        // create token
        const token = createToken(user.email, user.name);
        console.log(token);

        return res.status(200).json({message: "OK", name: user.name, email: user.email})

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error user cant login ", cause: error.message });
    }
}
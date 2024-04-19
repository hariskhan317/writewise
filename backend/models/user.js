import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['reader', 'writer'],
        default: 'reader',
    },
    profilePicture: {
        type: String,
        default: 'default_profile_picture.jpg'
    },
})

export const User = mongoose.model('User', userSchema);
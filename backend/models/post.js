import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: trye
    },
    content: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true, 
    },
    picture: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    categories: {
        type: Array,
        required: false   
    },
    comments: {
        type: String,
        ref: 'Comment',
    },
    tags: [String]
})

export const Post = mongoose.model('Post', postSchema)
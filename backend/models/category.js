import mongoose from "mongoose"; 

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }
})

export const Category = new mongoose.model("Category", categorySchema);
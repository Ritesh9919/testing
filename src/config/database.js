import mongoose from "mongoose";


export const connectDB = async(req, res)=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.error(error);
    }
}
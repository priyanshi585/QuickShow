import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.connection.on('connected', ()=> console.log("Database connected successfully"))
        await mongoose.connect(`${process.env.MONGODB_URI}/QuickShow`)
    } catch (error) {
        console.log(error.message + "Error connecting database");
    }
}

export default connectDB ;
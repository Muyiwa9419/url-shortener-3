import mongoose from "mongoose";
import "dotenv/config";

console.log("MongoDB connection string:", process.env.CONNECTION_STRING);
const connectDB = async () =>{
    try {
        if(process.env.CONNECTION_STRING){

            const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected: ", 
            connect.connection.host, 
            connect.connection.name)
        } else{
            throw new Error("MongoDB connection string is not defined in environment variables");
        }
            
    } catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB;
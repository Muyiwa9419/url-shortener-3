import mongoose from "mongoose";

const connectDB = async (CONNECTION_STRING: string) => {
	try {
		if (CONNECTION_STRING) {
			const connect = await mongoose.connect(CONNECTION_STRING);
			console.log(
				"Database connected: ",
				connect.connection.host,
				connect.connection.name
			);
		} else {
			throw new Error(
				"MongoDB connection string is not defined in environment variables"
			);
		}
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};
export default connectDB;
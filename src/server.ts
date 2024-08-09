import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbconfig";
import shortUrl from "./routes/shortUrl";

dotenv.config({
	path: "./.env",
});

connectDB(process.env.CONNECTION_STRING as string);

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use("/api/", shortUrl);
app.get("/", (req, res) => {
	res.send("Hello from the server");
});
app.listen(port, () => {
	console.log(`Server started sccessfully on port: ${port}`);
});

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// initialize express
const app = express();
//Using body-parser for app
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// Using cors for app
app.use(cors());
// Using dotenv for app
dotenv.config();
// Initialize port
const PORT = process.env.PORT || 5000;

// Connection to Mongoose
const URL = process.env.CONNECTION_URL;
mongoose
	.connect(URL)
	.then(() => {
		// Listening to the server
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
	})
	.catch((err) => console.log(err.message));

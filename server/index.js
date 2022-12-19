import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
// importing routes
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

// initialize express
const app = express();

// ------> middlewares  <------

// use body-parser to parse json data sent to the API
app.use(bodyParser.json());
// use cors to allow cross-origin resource sharing
app.use(cors());
// use dotenv to load environment variables from a .env file into process.env
dotenv.config();
// use cookie-parser to parse Cookie header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser());
// Database url
const URL = process.env.CONNECTION_URL;
// Connecting to the database
const connect = async () => {
	await mongoose
		.connect(URL)
		.then(() => console.log("Connected to DB"))
		.catch((err) => console.log(err.message));
};

// ------> routes  <------
app.use("/auth", authRoute);
app.use("/hotel", hotelsRoute);
app.use("/room", roomsRoute);
app.use("/user", usersRoute);

// error handling middleware
app.use((err, req, res, next) => {
	console.log(err);
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong";
	return res.status(errorStatus).json({
		// success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

const PORT = process.env.PORT || 8080;
// listen for requests
app.listen(PORT, () => {
	connect();
	console.log(`Server is running on port ${PORT}`);
});

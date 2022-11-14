import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
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
		console.log("Connected to MongoDB");
	})
	.catch((err) => console.log(err.message));

// Using routes for app
app.use("/server/auth", authRoutes);
app.use("/server/users", usersRoutes);
app.use("/server/hotels", hotelsRoutes);
app.use("/server/rooms", roomsRoutes);

// Handling Error
app.use((err, req, res, next) => {
	const status = err.statusCode || 500;
	const message = err.message || "Something went wrong";
	const data = err.data;
	res.status(status).json({ message: message, data: data });
});

// Listening to the server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

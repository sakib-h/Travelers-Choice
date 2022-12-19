import express from "express";
import {
	createHotel,
	updateHotel,
	deleteHotel,
	findHotel,
	getHotels,
} from "../controllers/hotel.js";

const router = express.Router();

// Create
router.post("/", createHotel);

// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel);

// Find Hotel
router.get("/:id", findHotel);

// Get All
router.get("/", getHotels);

export default router;

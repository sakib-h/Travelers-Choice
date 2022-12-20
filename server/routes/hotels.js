import express from "express";
import {
	createHotel,
	updateHotel,
	deleteHotel,
	findHotel,
	getHotels,
	countByCity,
	countByType,
} from "../controllers/hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updateHotel);

// Delete
router.delete("/delete/:id", verifyAdmin, deleteHotel);

// Find Hotel
router.get("/find/:id", findHotel);

// Get All
router.get("/", getHotels);

// Count by city name
router.get("/countByCity", countByCity);

// Count by type
router.get("/countByType", countByType);

export default router;

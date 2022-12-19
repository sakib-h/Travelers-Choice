import express from "express";
import {
	createHotel,
	updateHotel,
	deleteHotel,
	findHotel,
	getHotels,
} from "../controllers/hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updateHotel);

// Delete
router.delete("/:id", verifyAdmin, deleteHotel);

// Find Hotel
router.get("/:id", findHotel);

// Get All
router.get("/", getHotels);

export default router;

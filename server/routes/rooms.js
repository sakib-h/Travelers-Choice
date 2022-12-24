import express from "express";
import {
	createRoom,
	updateRoom,
	deleteRoom,
	findRoom,
	getRooms,
	updateRoomAvailability,
} from "../controllers/room.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/:hotelId", verifyAdmin, createRoom);

// Update
router.put("/:id", verifyAdmin, updateRoom);

// Update availability
router.put("/availability/:id", updateRoomAvailability);

// Delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// Find Hotel
router.get("/:id", findRoom);

// Get All
router.get("/", getRooms);

export default router;

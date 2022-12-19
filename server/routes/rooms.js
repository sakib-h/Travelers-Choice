import express from "express";
import {
	createRoom,
	updateRoom,
	deleteRoom,
	findRoom,
	getRooms,
} from "../controllers/room.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/:hotelId", verifyAdmin, createRoom);

// Update
router.put("/:id", verifyAdmin, updateRoom);

// Delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// Find Hotel
router.get("/:id", findRoom);

// Get All
router.get("/", getRooms);

export default router;

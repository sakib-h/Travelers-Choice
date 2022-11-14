import express from "express";
import {
	createHotel,
	deleteHotel,
	getAllHotels,
	getHotel,
	updateHotel,
} from "../controllers/hotel.js";
const router = express.Router();

// CREATE
router.post("/", createHotel);
// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deleteHotel);
// FETCH ONE
router.get("/:id", getHotel);
// FETCH ALL
router.get("/", getAllHotels);
export default router;

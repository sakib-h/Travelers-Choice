import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
	const newHotel = new Hotel(req.body);
	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel);
	} catch (error) {
		res.send(500).json({ error: error.message });
	}
});
// UPDATE
// DELETE
// FETCH ONE
// FETCH ALL
export default router;

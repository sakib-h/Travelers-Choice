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
router.put("/:id", async (req, res) => {
	try {
		const updateHotel = await Hotel.findOneAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateHotel);
	} catch (error) {}
});
// DELETE
router.delete("/:id", async (req, res) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json("Hotel has been deleted...");
	} catch (error) {}
});
// FETCH ONE
router.get("/:id", async (req, res) => {
	const hotel = await Hotel.findById(req.params.id);
	res.status(200).json(hotel);
});
// FETCH ALL
router.get("/", async (req, res) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels);
	} catch (error) {}
});
export default router;

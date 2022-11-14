import Hotel from "../models/Hotel.js";
// Create Hotel
export const createHotel = async (req, res, next) => {
	const newHotel = new Hotel(req.body);
	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel);
	} catch (error) {
		next(error);
	}
};

// Update Hotel
export const updateHotel = async (req, res, next) => {
	try {
		const updateHotel = await Hotel.findOneAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateHotel);
	} catch (error) {
		next(error);
	}
};
// Delete Hotel
export const deleteHotel = async (req, res) => {
	try {
		await Hotel.findByIdAndDelete(req.params.id);
		res.status(200).json("Hotel has been deleted...");
	} catch (error) {
		next(error);
	}
};

// Get One Hotel
export const getHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json(hotel);
	} catch (error) {
		next(error);
	}
};

// Get All Hotels
export const getAllHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels);
	} catch (error) {
		next(error);
	}
};

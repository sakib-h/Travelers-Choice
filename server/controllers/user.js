import User from "../models/User.js";

// Update User
export const updateUser = async (req, res, next) => {
	try {
		const updateUser = await User.findOneAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateUser);
	} catch (error) {
		next(error);
	}
};
// Delete User
export const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User has been deleted...");
	} catch (error) {
		next(error);
	}
};

// Get One User
export const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

// Get All Users
export const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};

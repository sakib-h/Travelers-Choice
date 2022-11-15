import User from "../models/User.js";
import bcrypt from "bcrypt";
// Register User
export const register = async (req, res, next) => {
	try {
		const saltRounds = 10;
		const myPlaintextPassword = req.body.password;
		const hashPass = await bcrypt.hash(myPlaintextPassword, saltRounds);
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashPass,
			isAdmin: req.body.isAdmin,
		});
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};

// Login User
export const login = (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

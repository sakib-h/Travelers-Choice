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
export const login = async (req, res, next) => {
	const userName = req.body.username;
	const password = req.body.password;

	try {
		const user = await User.findOne({ username: userName });
		if (!user) {
			return next(createError(404, "User not found"));
		} else {
			const checkPass = bcrypt.compareSync(
				req.body.password,
				user.password
			);
			if (!checkPass) {
				return next(createError(400, "Password Did not Match"));
			} else {
				const userInfo = {
					_id: user._id,
					username: user.username,
					email: user.email,
				};
				res.status(200).json(userInfo);
			}
		}
	} catch (error) {
		next(error);
	}
};

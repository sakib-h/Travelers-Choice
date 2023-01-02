import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/Error.js";
import jwt from "jsonwebtoken";
export const register = async (req, res, next) => {
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);

		const newUser = new User({
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			password: hash,
			isAdmin: req.body.isAdmin,
		});
		await newUser.save();
		res.status(200).send("User created successfully");
	} catch (error) {
		next(error);
	}
};
export const login = async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) {
			return next(createError(404, "User not found"));
		} else {
			const isPasswordCorrect = bcrypt.compareSync(
				req.body.password,
				user.password
			);
			if (!isPasswordCorrect) {
				return next(createError(401, "Invalid credentials"));
			} else {
				const token = jwt.sign(
					{ id: user._id, isAdmin: user.isAdmin },
					process.env.JWT_SECRET_KEY
				);
				const userInfo = {
					name: user.name,
					username: user.username,
					email: user.email,
					isAdmin: user.isAdmin,
				};
				res.cookie("access_token", token, { httpOnly: true })
					.status(200)
					.json(userInfo);
			}
		}
	} catch (error) {
		next(error);
	}
};

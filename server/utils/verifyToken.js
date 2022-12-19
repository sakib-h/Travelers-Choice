import jwt from "jsonwebtoken";
import { createError } from "./Error.js";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.access_token;
	if (!token) {
		return next(createError(401, "Unauthorized"));
	} else {
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) {
				return next(createError(403, "Token is not valid"));
			} else {
				req.user = user;
				next();
			}
		});
	}
};

export const verifyUser = (req, res, next) => {
	verifyToken(req, res, next, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			next(
				createError(403, "You are not allowed to perform this action")
			);
		}
	});
};

export const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, next, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			next(
				createError(403, "You are not allowed to perform this action")
			);
		}
	});
};

import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = async (req, res, next) => {
	const token = await req.cookies.access_token;
	if (!token) {
		return next(
			createError(401, "Access Denied, You are not authenticated")
		);
	} else {
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) {
				return next(createError(401, "Access Denied, Invalid Token"));
			} else {
				req.user = user;
			}
			next();
		});
	}
};
export const verifyUser = async (req, res, next) => {
	await verifyToken(req, res, next),
		() => {
			if (req.user.id === req.params.id || req.user.isAdmin) {
				next();
			} else {
				next(createError(403, "Access Denied, You are not authorized"));
			}
		};
};

export const verifyAdmin = async (req, res, next) => {
	await verifyToken(req, res, next),
		() => {
			if (req.user.isAdmin) {
				next();
			} else {
				next(createError(403, "Access Denied, You are not authorized"));
			}
		};
};

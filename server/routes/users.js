import express from "express";
import {
	deleteUser,
	findUser,
	getUsers,
	updateUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// ------------------------- AUTHENTICATION ------------------------- //
// router.get("/check-authentication", verifyToken, (req, res, next) => {
// 	res.status(200).json("Authentication is successful");
// });
//
// router.get("/check-user/:id", verifyUser, (req, res, next) => {
// 	res.status(200).json("User is authorized and can delete your account");
// });
//
// router.get("/check-admin/:id", isAdmin, (req, res, next) => {
// 	res.status(200).json("Hello admin");
// });
// ------------------------- AUTHENTICATION ------------------------- //

// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Find USER
router.get("/:id", verifyUser, findUser);

// Get All
router.get("/", verifyAdmin, getUsers);

export default router;

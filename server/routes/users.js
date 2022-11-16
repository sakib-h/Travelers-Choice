import express from "express";
import {
	deleteUser,
	updateUser,
	getUser,
	getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// Update user
router.put("/:id", verifyUser, updateUser);

// Delete user
router.delete("/:id", verifyUser, deleteUser);

// Get user
router.get("/:id", verifyUser, getUser);

// Get all users
router.get("/", verifyAdmin, getAllUsers);

export default router;

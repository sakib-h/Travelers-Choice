import express from "express";
import {
	deleteUser,
	updateUser,
	getUser,
	getAllUsers,
} from "../controllers/user";
const router = express.Router();

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

// Get user
router.get("/:id", getUser);

// Get all users
router.get("/", getAllUsers);

export default router;

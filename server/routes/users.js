import express from "express";
const router = express.Router();
import { getPosts, createPost } from "../controllers/posts.js";
// Creating posts route for the server
router.get("/", getPosts);
router.post("/", createPost);

export default router;

import express from "express";
const router = express.Router();
import { getPosts } from "../controllers/posts.js";
// Creating posts route for the server
router.get("/", getPosts);

export default router;

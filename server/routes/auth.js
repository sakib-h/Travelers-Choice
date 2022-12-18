import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World! This is Auth end point");
});

router.get("/register", (req, res) => {
	res.send("Hello World! This is Register end point");
});

router.get("/login", (req, res) => {
	res.send("Hello World! This is Login end point");
});

export default router;

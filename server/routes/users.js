import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World! This is Users end point");
});

export default router;

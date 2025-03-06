import express from "express";
import { signup } from "../controllers/signupController.js";
import { validateSignup } from "../middleware/validateSignup.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", validateSignup, signup);

export default router; 

import express from "express";
import { signup } from "../controllers/signupController.js";
import { login } from "../controllers/loginController.js";
import { validateSignup } from "../middleware/validateSignup.js";
import { validateLogin } from "../middleware/validateLogin.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", validateSignup, signup);

// POST /api/auth/login
router.post("/login", validateLogin, login);

export default router;

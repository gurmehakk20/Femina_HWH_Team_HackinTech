import express from "express";
import { getResources } from "../controllers/resourceController.js";

const router = express.Router();

// GET /api/resources - Fetch all resources
router.get("/", getResources);

export default router;

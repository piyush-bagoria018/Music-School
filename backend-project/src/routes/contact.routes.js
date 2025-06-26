import express from "express";
import { saveContactMessage } from "../controllers/contactController.js";

const router = express.Router();

// POST /api/v1/contact
router.post("/", saveContactMessage);

export default router;
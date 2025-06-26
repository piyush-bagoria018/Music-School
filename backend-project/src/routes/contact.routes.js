import express from "express";
import { saveContactMessage } from "../controllers/contactController.js";

const router = express.Router();

// POST /api/contact
router.post("/contact", saveContactMessage);

export default router;
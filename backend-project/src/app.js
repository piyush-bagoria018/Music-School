import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

// Simplified CORS setup for production
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

// Register the contact route at /api/contact
app.use("/api/contact", contactRoutes);

export { app };
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/contact.routes.js";

const app = express();

// Support multiple origins for CORS
const allowedOrigins = process.env.CORS_ORIGIN?.split(',').map(origin => origin.trim());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests
      if (allowedOrigins && allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));

app.use("/api", routes);

export { app };
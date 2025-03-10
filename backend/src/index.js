import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://insi-chat.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

connectDB();
// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Health Check Route
app.get("/api/healthcheck", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

// Export app and server for Vercel
export { app, server };
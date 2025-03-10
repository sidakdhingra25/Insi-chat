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
    credentials: true,
  })
);

connectDB();
// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Health Check Route
app.get("/api/healthcheck", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error stack:", err.stack);
  console.error("Error message:", err.message);
  res.status(500).send({ message: "Internal server error" });
});

// Export app as the default export for Vercel
export default app;
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/auth/signup", (req, res) => {
  res.send("Signup successful...");
});
app.get("/api/auth/login", (req, res) => {
  res.send("Login successful...");
});
app.get("/api/auth/logout", (req, res) => {
  res.send("Logged out...");
});

app.listen(PORT, () => console.log("Server running on port 3000 " + PORT));

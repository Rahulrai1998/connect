import express from "express";
import { Router } from "express";

const router = Router();

router.get("/signup", (req, res) => {
  res.send("Signup successful...");
});
router.get("/login", (req, res) => {
  res.send("Login successful...");
});
router.get("/logout", (req, res) => {
  res.send("Logged out...");
});

export default router;

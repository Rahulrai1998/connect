import express from "express";
import { Router } from "express";

const router = Router();

router.get("/send", (req, res) => {
  res.send("Messages sent...");
});

export default router;

import express from "express";
import { Router } from "express";

const router = Router(); //1a

//the callback inside the get method is called route handler.
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

/*

1
a. Router(): it is an express module which provides the facility create, maintain modular route handlers.

*/
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";

dotenv.config();
const app = express();

//GET CURRENT FILE PATH
const __dirname = path.resolve();
// console.log(__dirname)
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => console.log("Server running on port 3000 " + PORT));

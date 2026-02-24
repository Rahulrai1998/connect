import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";

dotenv.config(); //1c

const app = express();

//GET CURRENT FILE PATH
const __dirname = path.resolve(); //2a
console.log("path "+__dirname + " " + path.resolve()); //2b

// console.log(process.env) // 1b
const PORT = process.env.PORT || 3000; //1a

app.use("/api/auth", authRoutes); //4a
app.use("/api/messages", messageRoutes);

//DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html")); //3a
  });
}
app.listen(PORT, () => console.log("Server running on port 3000 " + PORT));

/*

1. 
a. process.env : it is a Node.js global object, which stores the parsed values/variables from .env file parsed by dotenv.config() method.
b. console.log(process.env) : returns an object of key-value pair which is parsed by dotenv module from .env file.
c. dotenv.config(): this function loads the environment variables form .env file from the root directory. it reads .env file in the current working directory.

2.
a. path.resolve() : used to construct absolute path from relative path segments. Since, there is no args in resolve() it returns the current absolute path of current working directory.
b. __dirname: built-in varibale in Node.js that contains the absolute path of the directory where the current JS file resides.

3.
a. res.sendFile(path): an express method used to send an static file as a HTTP response to client like HTML, image etc. path arg must be an absolute path.

4. 
a. app.use(): this method is used to bind the middleware functions to an instance of the app object.
b. middleware: this is a function which holds the access to request(req), response(res) and the next middleware function (via next()) in the app's request-response cycle.

*/

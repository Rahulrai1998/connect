import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED:", connect.connection.host); //1b
  } catch (error) {
    console.log("Error connecting Mongodb: ", error);
    process.exit(1); // 1a
  }
};

/*
1.
a. process.exit(): a Node.js method, which that terminates the running process/application immediatedly and indicates an error or failure condition to OS or any calling program/script. It is usefull in case there are pending asynchronous operations (like writing files, network requests, or timers) that have not yet completed. 

b. connection.host: in Mongodb, it refers to network address (IP or DNS name) of the database server.
*/

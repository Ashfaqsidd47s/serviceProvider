import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
import authRouter from "./routes/auth.js"
import serviceRouter from "./routes/service.js"
import serviceProviderRouter from "./routes/serviceProvider.js"

const app = express();

app.use(express.json())
dotenv.config()

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methodName: "GET, POST, PUT, DELTE",
        credentials: true
    })
)


// connecting to the mongodb database
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:',err);
});

//ROUTES
app.use("/api/auth", authRouter);
app.use("/api/service", serviceRouter);
app.use("/api/provider", serviceProviderRouter);

// Root Router
app.get("/",  (req, res) => {
    res.send("Server is working fine...");
})


// server initilization 
const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server started at port :", PORT);
})
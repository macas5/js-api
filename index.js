import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js";


const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());


const connectionToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connection to mongoDB is successful');
    } catch (error) {
        console.log(error);
    }
};

app.use('/api', userRoute);
app.use('/api', authRoute);

app.listen(port, () => {
    connectionToDb();
    console.log(`Server started on port ${port}`);
});
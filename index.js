import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

import bookRoute from './routes/bookRoute.js'

const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connection to DB is successful');
    } catch (error) {
        console.error(error);
    }
}

app.use('/api', bookRoute);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
    connectToDb();
});
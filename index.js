import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

const app = express();
const port = 3000;

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connection to DB is successful');
    } catch (error) {
        console.error(error);
    }
}

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
    connectToDb();
});
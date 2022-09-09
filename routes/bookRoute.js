import express from "express";
import { createBook, getAllBooks } from "../controllers/bookController.js";


const router = express.Router();

router.post ('/createBook', createBook);

router.get('/books', getAllBooks);

export default router;
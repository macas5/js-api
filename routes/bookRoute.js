import express from "express";
import { createBook, findBooksById, getAllBooks } from "../controllers/bookController.js";


const router = express.Router();

router.post ('/createBook', createBook);

router.get('/books', getAllBooks);

router.get('/find/:id', findBooksById);

export default router;
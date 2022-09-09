import express from "express";
import { createBook, deleteBookById, deleteBooks, findBook, findBooksById, getAllBooks, updateBookById } from "../controllers/bookController.js";


const router = express.Router();

router.post ('/createBook', createBook);

router.get('/books', getAllBooks);

router.get('/find', findBook);

router.get('/find/:id', findBooksById);

router.delete('/delete', deleteBooks);

router.delete('/delete/:id', deleteBookById);

router.put('/update/:id', updateBookById);

export default router;
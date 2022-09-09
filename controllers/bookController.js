import bookModel from '../models/bookModel.js'

export const createBook = async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save();
        res.status(201).send('Book was created successfuly');
    } catch (error) {
        res.status(400).send(error);
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find();
        res.status(302).json(books);
    } catch (error) {
        res.status(404).send(error);
    }
}

export const findBooksById = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        res.status(302).json(book);
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}
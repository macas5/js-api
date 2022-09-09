import bookModel from '../models/bookModel.js'

export const createBook = async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save();
        res.status(201).send('Book was created successfuly');
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find();
        res.status(302).json(books);
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}

export const findBook = async (req, res) => {
    try {
        const books = await bookModel.find(req.body);
        res.status(302).json(books);
    } catch (error) {
        console.log(error);
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

export const deleteBooks = async (req, res) => {
    try {
        await bookModel.deleteMany(req.body);
        res.status(200).send(`Books with ${Object.keys(req.body)[0]}: ${Object.values(req.body)[0]} has been removed`);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const deleteBookById = async (req, res) => {
    try {
        const book = await bookModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`Book '${book.title}' has been removed`);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateBooks = async (req, res) => {
    try {
        const updatedBooks = await bookModel.updateMany(req.body[0], {$set: req.body[1]})
        res.status(202).json(updatedBooks);
    } catch (error) {
        console.error(error);
        res.status(304).send(error);
    }
}

export const updateBookById = async (req, res) => {
    try {
        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(202).json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(304).send(error);
    }
}
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
import mongoose, { trusted } from 'mongoose';
import { boolean } from 'webidl-conversions';

const bookSchema = new mongoose.Schema ({
    isbn: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    isReadableOnline: {
        type: boolean,
        required: true
    },
    description: String,
    condition: String
});

export default mongoose.model('book', bookSchema);
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
        type: Boolean,
        required: true
    },
    description: String,
    bookCondition: String
}, {timestamps: true});

export default mongoose.model('book', bookSchema);
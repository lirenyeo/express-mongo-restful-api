import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookModel = new Schema({
    title: { type: String },
    author: { type: String }
})

// collection name is 'books'
export default mongoose.model('books', bookModel)

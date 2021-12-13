import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    publication_date: {
        type: String
    },
    in_stock_date: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    img_src: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
export default mongoose.model('product', Schema);
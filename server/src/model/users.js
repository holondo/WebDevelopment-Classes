import mongoose from 'mongoose';

const schema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: false,
        default: ""
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    cart: [{
        type: String,
        required: false
    }],
    booksRead: [{
        type: String,
        required: false
    }],
    collections: [{
        type: String,
        required: false
    }],
    wishlist: [{
        type: String,
        required: false
    }],
    follows: [{
        type: String,
        required: false
    }],
    avatar: {
        type: String,
        required: false,
        default: ""
    }
});

export default mongoose.model('user', schema);

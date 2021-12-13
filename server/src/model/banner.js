import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model('banner', Schema);

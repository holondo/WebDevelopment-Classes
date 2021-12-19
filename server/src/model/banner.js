import mongoose from 'mongoose';

// Banner db model
const Schema = mongoose.Schema({
    color: {
        type: String,
        required: false,
        default: "#ffffff"
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String,
        required: false,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: false,
        trim: true,
        default: ""
    }
});

export default mongoose.model('banner', Schema);

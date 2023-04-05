import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        userName: String,
        handle: String,
        image: String,
        topic: String,
        time: String,
        likes: Number,
        liked: Boolean,
        dislikes: Number,
        disliked: Boolean,
        retuits: Number,
        replies: Number,
        tuit: String

    }, {collection: 'tuits'});
export default schema;
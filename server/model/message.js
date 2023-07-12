import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    conversationId: {type: String},
    senderEmail: {type: String},
    recieverEmail: {type: String},
    type: {type: String},
    text: {type: String}
}, {timestamps: true})



const message = mongoose.model('message', messageSchema);

export default message;
import message from "../model/message.js"
import conversation from "../model/conversation.js";

export const newMessage = async (req, resp)=>{
    try{
        const newMessage = new message(req.body);
        await newMessage.save();
        
        await conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text});

        return resp.status(200).json("Message has been sent to db successfully");
    }
    catch(err){
        return resp.status(500).json(err.message);
    }
}


export const getMessages = async (req, resp)=>{
    try{
        const messages = await message.find({conversationId: req.params.id});
        return resp.status(200).json(messages);
    }
    catch(err){
        return resp.status(500).json(err.message);
    }
}
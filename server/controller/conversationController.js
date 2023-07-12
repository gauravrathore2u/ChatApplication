import conversation from "../model/conversation.js";

export const newConversation = async (req, resp)=>{
    try{
        const senderEmail = req.body.senderEmail;
        const receiverEmail = req.body.receiverEmail;
        // console.log(senderEmail + " " + receiverEmail);
        const exist = await conversation.findOne({members: {$all: [receiverEmail, senderEmail]}});
        // console.log(exist);

        if(exist){
            return resp.status(200).json("conversation already exist");
        }

        const newConversation = new conversation({
            members: [senderEmail, receiverEmail]
        })

        await newConversation.save();
        return resp.status(200).json("convesation saved successfully")
    }
    catch(err){
        return resp.status(500).json(err.message)
    }
}



export const getConversation = async (req, resp)=>{
    try{
        const senderEmail = req.body.senderEmail;
        const receiverEmail = req.body.recieverEmail;
        // console.log(req.body);
        let conversations = await conversation.findOne({members: {$all: [receiverEmail, senderEmail]}});
        // console.log(conversations);
        return resp.status(200).json(conversations);
    }
    catch(err){
        return resp.status(500).json(err.message);
    }
}
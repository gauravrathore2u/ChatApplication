import user from "../model/user.js"

export const addUser = async (req, resp)=>{
    try{
        let exist = await user.findOne({sub: req.body.sub});
        if(exist){
            resp.status(200).json({msg: 'user already exist'});
            return;
        }
            const newUser = new user(req.body);
            await newUser.save();
            return resp.status(200).json(newUser);
            
    }
    catch(err){
        return req.status(500).json(err.message);
    }
}


export const getUsers = async (req, resp)=>{
    try{
        const users = await user.find({});
        return resp.status(200).json(users);
    }
    catch(err){
        return resp.status(500).json(err.message);
    }
}


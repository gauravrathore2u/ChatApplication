import axios from 'axios';



const url = "http://localhost:8000";    //backend url



export const addUser = async (data)=>{
    try{
       await axios.post(`${url}/add`, data);
    }
    catch(err){
        console.log("Error in add user api", err.message);
    }
}


export const getUsers = async ()=>{
    try{
        let response = await axios.get(`${url}/users`);
        return response.data;
    }
    catch(err){
        console.log("error in fetching all users", err.message);
    }
}

export const setConversation = async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`, data);
    }
    catch(err){
        console.log("error in setting conversation", err.message);
    }
}


export const getConversation = async (data)=>{
    try{
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    }
    catch(err){
        console.log("error in getting conversation", err.message);
    }
}


export const newMessage = async (data)=>{
    try{
        await axios.post(`${url}/message/add`, data);
    }
    catch(err){
        console.log("error in sending new message conversation", err.message);
    }
}


export const getMessages = async (id)=>{
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    }
    catch(err){
        console.log("error in getting message", err.message);
    }
}


export const uploadFile = async (data)=>{
    try{
        return await axios.post(`${url}/file/upload`, data);
    }
    catch(err){
        console.log("error in uploading files", err.message);
    }
}
import mongoose from "mongoose";
import dotevn from 'dotenv';

const dotenv = dotevn.config();


mongoose.set('strictQuery', false);
const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('database connected');
    }
    catch(err){
        console.log('database not connected successfully:- ', err.message);
    }
}

export default connection;
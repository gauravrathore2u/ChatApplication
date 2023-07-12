import express from 'express';   //to use import in server we have to give "type":"module" in package.json
import mongoose from "mongoose";
import dotevn from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import connection from './database/db.js';   //in server side giving extention of file is imp '.js'
import route from './routes/route.js';

const dotenv = dotevn.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',route);

connection();



const PORT = 8000;

app.listen(PORT, ()=>console.log(`server is running successfully at port ${PORT}`));
import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000'

const conn = mongoose.connection;

let gfs, gridFsBucket;
conn.once('open', ()=>{
    gridFsBucket =  new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });

    gfs = grid(conn.db, mongoose.mongo)
    gfs.collection('fs');
})

export const uploadFile = async (req, resp)=>{
    if(!req.file){
        return resp.status(404).json('File not found');
    }   

    const imageUrl = `${url}/file/${req.file.filename}`;

    return resp.status(200).json(imageUrl);
}


export const getImage = async (req, resp)=>{
    try{
        const file = await gfs.files.findOne({filename: req.params.filename});
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(resp);
    }
    catch(err){
        return resp.status(500).json(err.message);
    }
}


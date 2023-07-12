import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss: {type: String},
    nbf: {type: Number},
    aud: {type: String},
    sub: {type: String, required: true},
    email: {type: String, required: true},
    email_varified: {type: Boolean},
    azp: {type: String},
    name: {type: String, required: true},
    picture: {type: String},
    given_name: {type: String},
    family_name: {type: String},
    iat: {type: Number},
    exp: {type: Number},
    jti: {type: String}
});

//model create the collection in db
const user =  mongoose.model('user', userSchema);   

export default user;
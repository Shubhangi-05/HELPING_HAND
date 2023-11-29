import mongoose from "mongoose";

const ngoSchema =new mongoose.Schema(
    {
       organization:{
        type:String,
        required:true,
        trim:true
       },
       email:
       {
        type:String,
        required:true,
        unique:true
       },
       password:
       {
        type:String,
        required:true,

       },
       phone:
       {
        type:String,
        required:true
       },
       city:
       {
        type:String,
        required:true,
       },
       address:{
        type:String,
        required:true,
       },
       pan : {
        type:Number,
        required:true,
       }
    },{timestamps:true}
)

export default mongoose.model('ngos',ngoSchema);
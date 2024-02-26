import mongoose from "mongoose";

const postSchema =new mongoose.Schema(
    {
       name:{
        type:String,
        required:true,
        trim:true
       },
       slug:{
         type:String,
         required:true,
       },
       email:
       {
        type:String,
        required:true,
       },
       phone:
       {
        type:String,
        required:true,

       },
       address:
       {
         type:{},
         required:true
       },
       city:
       {
        type:String,
        required:true
       },
       description:
       {
        type:String,
        required:true
       },
       category:
       {
        type:String,
        required: true,
        enum: ["FOOD SUPPLY", "CLOTHING", "EDUCATION", "JOB TRAINING", "INFRASTRUCTURE", "HEALTH", "CHILD CARE", "WOMEN EMPOWERMENT", "OLD-AGE CARE"]
       },
       photo:
       {
        data:Buffer,
        contentType:String,
       },
      
       
    },{timestamps:true}
)

export default mongoose.model('posts',postSchema);
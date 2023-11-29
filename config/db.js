import mongoose from "mongoose";
import  Color  from "colors";
const connectDB=async()=>{
    try
    {
       const conn=await mongoose.connect(process.env.MONGO_URL);
       console.log(`Connected to host ${conn.connection.host}`.bgMagenta.white);
    }catch(error)
    {
        console.log(`Error in MongoDb ${error}`.bgCyan.white);
    }
}

export default connectDB;
import  mongoose, { Schema } from "mongoose";



  const Notes= new Schema({
    title:{
        type:String,
        required:[true,"Please add a note title"]
    },
    description:{
        type:String,
        required:[true,"Please add a note description"]
    }
});


export default mongoose.model('notes', Notes);
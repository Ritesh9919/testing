import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true,
    min:5,
    max:20
 },
 content:{
    type:String,
    required:true,
    min:50
 },
 titleUrl:{
    type:String
 },
 author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
 }

},{timestamps:true});


export const Blog = mongoose.model("Blog", blogSchema);
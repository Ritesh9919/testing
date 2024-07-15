import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
 name:{
    type:String
 },
 email:{
    type:String,
    required:true,
    unique:true
 },
 password:{
    type:String,
    required:true
 },
 phone:{
    type:String,
    validate:{
        validator:function(v){
          return v.toString().length >= 9
        },
        message:"Please provide valid phone number"
    },
    required:[true, "Phone number is required"]
 },
 role:{
    type:String,
    enum:["user", "admin", "super-admin", "astrologer", "support", "blogger", "operation"],
    default:"user"
 },
 gender:{
    type:String,
    emum:["male", "female", "others"]
 },
 dateOfBirth:{
    type:Date
 },
 avater:{
   type:String
 }
},{timestamps:true});




export const User = mongoose.model("User", userSchema);
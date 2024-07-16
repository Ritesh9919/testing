import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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



userSchema.pre('save', async function(next){
   if(!this.isModified('password')) return next();
   this.password = await bcrypt.hash(this.password, 10);
})


userSchema.methods.comparePassword = async function(userPassword) {
   return await bcrypt.compare(userPassword, this.password);
}

userSchema.methods.accessToken = function() {
   const token = jwt.sign({userId:this._id}, "test", {expiresIn:'1d'});
   return token;
}




export const User = mongoose.model("User", userSchema);
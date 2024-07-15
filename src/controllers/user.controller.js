import {User} from '../models/user.model.js';
import {asyncHandler, apiError,ApiResponse} from '../utils/index.js';


const registerUser = asyncHandler(async(req, res, next)=> {
   const {name, email, password, phone, gender, dateOfBirth,role}  = req.body;
   if(!email || !password || !phone || !dateOfBirth) {
      throw new apiError(400, "All fields are required");
   }
   console.log(name);
   const user = await User.findOne({email});
   
   if(user) {
    throw new apiError(400, "User already exist");
   }
  
   const avatarPath = req.file.path;
   console.log(avatarPath);

   const createdUser = await User.create({
    name,
    email,
    password,
    phone,
    gender,
    role,
    avater:avatarPath,
    dateOfBirth

   })

   return res.status(201)
   .json(new ApiResponse(200, {user:createdUser}, "Register successfull"));


})


const loginUser = asyncHandler(async(req, res, next)=> {
  
})





export {
    registerUser,
    loginUser
}

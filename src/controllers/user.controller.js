import {User} from '../models/user.model.js';
import {asyncHandler, apiError,ApiResponse} from '../utils/index.js';


const registerUser = asyncHandler(async(req, res, next)=> {
   const {name, email, password, phone, gender, dateOfBirth,role}  = req.body;
   if(!email || !password || !phone || !dateOfBirth) {
      throw new apiError(400, "All fields are required");
   }
   
   const user = await User.findOne({email});
   
   if(user) {
    throw new apiError(400, "User already exist");
   }
  
   const avatarPath = req.file?.path;
   

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

   const registerUser = await User.findById(createdUser._id).select("-password");

   return res.status(201)
   .json(new ApiResponse(200, {user:registerUser}, "Register successfull"));


})


const loginUser = asyncHandler(async(req, res, next)=> {
   const {email, password} = req.body;
   if(!email || !password) {
      throw new apiError(400, "Both fields are required");
   }

   const user = await User.findOne({$or:[{email},{password}]});
   if(!user) {
      throw new apiError(400, 'User does not exist');
   }

   const isPasswordCurrect = await user.comparePassword(password);
   if(!isPasswordCurrect) {
      throw new apiError(400, 'Password is incorrect');
   }

   const accessToken = await user.accessToken();
   const loginUser = await User.findById(user._id).select("-password");
   return res.status(200).json(new ApiResponse(200, {user:loginUser, accessToken}, "Login successfull"));
})

const updateUserById = asyncHandler(async(req, res, next)=> {
   
})


const deleteUserById = asyncHandler(async(req, res, next)=> {
   
})


const updateBloggerById = asyncHandler(async(req, res, next)=> {
   
})

const deleteBloggerById = asyncHandler(async(req, res, next)=> {
   
})

const updateAstrologerById = asyncHandler(async(req, res, next)=> {
   
})


const deleteAtrologerById = asyncHandler(async(req, res, next)=> {
   
})


const getUserById = asyncHandler(async(req, res, next)=> {
   
})


const getBloggerById = asyncHandler(async(req, res, next)=> {
   
})


const getAtrologerById = asyncHandler(async(req, res, next)=> {
   
})


const getAllUsers = asyncHandler(async(req, res, next)=> {

})


const getAllBloggers = asyncHandler(async(req, res, next)=> {
   
})


const getAllAstrologer = asyncHandler(async(req, res, next)=> {
   
})







export {
    registerUser,
    loginUser
}

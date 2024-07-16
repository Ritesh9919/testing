import {Blog} from '../models/blog.model.js';
import {apiError, ApiResponse, asyncHandler} from '../utils/index.js';



const createBlog = asyncHandler(async(req, res, next)=> {
    const {title, content} = req.body;
    
   if(!title || !content) {
    throw new apiError(400, "Both fields are required");
   }

   

   if(req.user.role == 'blogger' || req.user.role == "astrologer") {
    const url = req.file?.path;
    
 
    const blog = await Blog.create({
       title,
       content,
       titleUrl:url,
       author:req.user._id
    })
 
    return res.status(201).json(new ApiResponse(200, blog, "Blog created"));
   }else {
     throw new apiError(400, "Only blogger and astrologer can write blog");
   }




   
})



const getBlog = asyncHandler(async(req, res, next)=> {

})



const getAllBlogs = asyncHandler(async(req, res, next)=> {
    
})



const getBlogsByBlogger = asyncHandler(async(req, res, next)=> {
    
})


const getBlogsByAstrologer = asyncHandler(async(req, res, next)=> {
    
})



const updateBlog = asyncHandler(async(req, res, next)=> {
    
})




const deleteBlog = asyncHandler(async(req, res, next)=> {
    
})









export {
    createBlog
}
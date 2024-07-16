import express from 'express';
const router = express.Router();
import {varifyJwt} from '../middlewares/auth.middleware.js';
import {upload} from '../middlewares/multer.middleware.js';
import {createBlog} from '../controllers/blog.controller.js'

router.post('/', varifyJwt, upload.single("titleUrl"), createBlog);


export default router;
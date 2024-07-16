import { User } from "../models/user.model.js";
import  jwt from 'jsonwebtoken';
import {apiError} from '../utils/index.js';



export const varifyJwt = async(req, res, next)=> {
    try {
        const token = req.headers['authorization'];
        console.log(token);
        if(!token) {
           throw new apiError(401, "Please proved accessToken");
        }

        const decoded = jwt.verify(token, 'test');
        const user = await User.findById(decoded.userId).select('-password');
        if(!user) {
            throw new apiError(401, "Invalid token or expired");
        }
        req.user = user;
        next();
    } catch (error) {
        throw new apiError(401, "invalid token or token is expred");
    }
}


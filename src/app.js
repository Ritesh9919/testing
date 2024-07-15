import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import {errorHandlerMiddleware} from './middlewares/errorHandler.middleware.js';

// routers
import userRouter from './routes/user.route.js';



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/', (req, res)=> {
    res.send("Hello World");
})

// routes
app.use('/api/v1/users', userRouter);

app.use(errorHandlerMiddleware);


 export default app;
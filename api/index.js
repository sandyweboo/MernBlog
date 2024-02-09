import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './controller/authController.js';
import cors from 'cors'


dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connection succesfull")
})

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const app = express();
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user',userRoutes )
app.use('/api/user', authRoutes)
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internel server error";
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})

 app.listen(3002, ()=>{
    console.log('server running')
 })




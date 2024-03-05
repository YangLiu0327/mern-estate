// npm init -y to create a backend package.json
// update "type": "module" for package.json
// npm install express
// node api/index.js to run backend
// install nodemon => npm run dev
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connect to MongoDB!')
})
.catch((err) => {
    console.log(err)
});

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


// create a middleware to handle error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
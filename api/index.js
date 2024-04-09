// npm init -y to create a backend package.json
// update "type": "module" for package.json
// npm install express
// node api/index.js to run backend
// install nodemon => npm run dev
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import path from 'path';
import cookieParser from 'cookie-parser'; // get information from cookie
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connect to MongoDB!')
})
.catch((err) => {
    console.log(err)
});

const _dirname = path.resolve();

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: ['http://localhost:5173', 'https://mern-estate-ifck.onrender.com'],
    credentials: true
  }));
app.use(cookieParser());

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter)

app.use(express.static(path.join(_dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'client', 'dist', 'index.html'));
})

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
// npm init -y to create a backend package.json
// update "type": "module" for package.json
// npm install express
// node api/index.js to run backend
// install nodemon => npm run dev
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';

const app = express();
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
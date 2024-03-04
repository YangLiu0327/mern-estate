// npm init -y to create a backend package.json
// update "type": "module" for package.json
// npm install express
// node api/index.js to run backend
// install nodemon => npm run dev
import express from 'express';
const app = express();

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})
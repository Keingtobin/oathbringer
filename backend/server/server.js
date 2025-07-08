import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import cors from 'cors';

const port = 5000;

dotenv.config();

const app = express();
app.use(cors());

app.get('/', (req,res) => {
    res.send("Hello from our server!");
});


app.get("/auth/callback", (req,res) =>{
    console.log(res.code);
});

console.log(process.env.MONGO_URI);

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
});


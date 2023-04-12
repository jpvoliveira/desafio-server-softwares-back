import dotenv from 'dotenv';
import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes)

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.mvz1hdy.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(3000, () => {
        console.log('Listening on port 3000')
    })
    console.log('Conectou ao banco')
}).catch((err) => console.log(err))

import express from 'express';

import mongoose from 'mongoose';

import morgan from 'morgan';

import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import labRouter from './routes/lab_routes.js';
dotenv.config();


const app = express()
const PORT = process.env.PORT || 6003;
const URI = process.env.MONGO_URI;

import cors from 'cors';


// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/api/lab", labRouter);


//connecting to the db
mongoose.connect(URI).then((results) => {
    if(results) console.log('mongoDB connected')
    }).catch((error) => console.log(error))
    

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
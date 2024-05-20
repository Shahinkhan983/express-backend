import { Request, Response } from "express";

const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');
// const router = require('./routes');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials: true
    })
);

// Database connection
main().catch(err => console.log(err));

async function main() {
    try {
        mongoose.set('strictPopulate', false);
        await mongoose.connect(process.env.DB_URL);
        console.log("=> Connected to DB");
    } catch (error) {
        console.log(error);
    }

}


// Router 

// app.use('/', router);
app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
    console.log('=> Server running on', PORT);
});
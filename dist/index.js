"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require('mongoose');
const express = require('express');
// const formData = require("express-form-data");
const cors = require('cors');
// const router = require('./routes');
// const { connectToDatabase } = require('./utils/Database');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
// app.use(formData.parse());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
// Database connection
main().catch(err => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            mongoose.set('strictPopulate', false);
            yield mongoose.connect('mongodb+srv://shahinEcommerce:WCXmtrD76ib9O7Na@cluster0.c60ctk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
            console.log("=> Connected to DB");
        }
        catch (error) {
            console.log(error);
        }
        // `await mongoose.connect('mongodb://${process.env.DBUSER}:${process.env.DBPASS}@127.0.0.1:27017/test')`;
    });
}
// connectToDatabase()
// Router 
// app.use('/', router);
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
app.listen(PORT, () => {
    console.log('=> Server running on', PORT);
});

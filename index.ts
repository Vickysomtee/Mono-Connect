import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

import express from 'express';
import { json } from 'body-parser'
import mongoose, { mongo } from 'mongoose';

const app = express();

app.use(json());

mongoose.connect('mongodb://localhost:27017/mono').then(() => { console.log('DB connected') }).catch(e => {
  console.log(e)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`)
})
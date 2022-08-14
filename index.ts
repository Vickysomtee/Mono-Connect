import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import router from "./src/routes/auth.routes"

const app = express();

app.use(json());

app.use('/health', (_, res) => res.sendStatus(200))
app.use('/v1', router)
app.use((req, res) => {
  return res
    .status(404)
    .json({ status: "error", message: `${req.method} ${req.originalUrl} not found` });
});

mongoose.connect('mongodb://localhost:27017/mono').then(() => { console.log('DB connected') }).catch(e => {
  console.log(e)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`)
})
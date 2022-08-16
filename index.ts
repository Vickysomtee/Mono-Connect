import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { json } from 'body-parser';
import cors from 'cors'
import mongoose from 'mongoose';
import authRouter from "./src/routes/auth.routes"
import userRouter from "./src/routes/user.routes"

const app = express();

app.use(json());
app.use(cors({ origin: '*' }))

app.use('/health', (_, res) => res.sendStatus(200))
app.use('/v1', authRouter, userRouter)
app.use
app.use((req, res) => {
  return res
    .status(404)
    .json({ status: "error", message: `${req.method} ${req.originalUrl} not found` });
});

mongoose.connect(process.env.MONGO_URI).then(() => { console.log('DB connected') }).catch(e => {
  console.log(e)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on Port ${process.env.PORT}`)
})
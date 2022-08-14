import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const register = async (req: Request, res: Response, next: NextFunction) => {

  try {
    let { firstName, lastName, email, password } = req.body;
    email = email.toLowerCase()

    let user = await User.findOne({email})

    if (user) return res.status(400).json({ status: "error", message: "User already exist" });

    user = await User.create({ firstName, lastName, email, password })

    return res.status(200).json({ status: "success", message: "Registration Successful"});
  } catch (error) {
    next(error);
  }
}

const login = async (req: Request, res: Response, next: NextFunction) => {

  try {
    let {email, password} = req.body;
    email = email.toLowerCase();

    let user = await User.findOne({email});

    if (!user || !bcrypt.compareSync(password, user.password)) return res.status(400).json({status: "error", message: "Invalid login credentials"})

    return res.status(200).json({status: "success", message: "Login Successful", data: {user, token: jwt.sign({id: user.id}, 'hddhdhedhdudj', {expiresIn: 3000})}})
  } catch (error) {
    next(error);
  }
}

export default {register, login}
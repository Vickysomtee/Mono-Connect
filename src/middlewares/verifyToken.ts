
import {Request, Response, NextFunction, request} from 'express'
import jwt from 'jsonwebtoken';

const validateUser = async (req: Request, res: Response, next: NextFunction) => {

  const authToken = req.headers.authorization;
  if (!authToken) return res.status(401).json({ status: "error", message: "Unauthorized" });

  try {
    if (req.headers.authorization?.split(' ')[0].toLowerCase() !== 'bearer') return res.status(401).json({ status: "error", message: "Unauthorized" });
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) return res.status(401).json({ status: "error", message: "Unauthorized" })

    //Verify the damn Token
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verifiedToken;
    req.token = token
    next()
  } catch (error) {
    next(error)
  }
};

export default {validateUser}
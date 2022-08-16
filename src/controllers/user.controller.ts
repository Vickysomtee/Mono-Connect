import { Request, Response, NextFunction} from 'express'

import User from "../models/user.model"
import mono from "../service/ext/monoConnect"

const exchangeToken = async (req: Request, res: Response, next: NextFunction) => {
  
  try {

    //Get generated mono code
    let {code} = req.body;

    // Generate a mono account ID for user
    const {data} = await mono.exchangeToken(code);

    let user = await User.findOneAndUpdate({id: req.user.id}, {mono_id: data.id}, {new: true});

    res.status(200).json({status: "success", message: "Account ID Generated", user})
    
  } catch (error) {
    next(error)
  }
}

export default {exchangeToken}
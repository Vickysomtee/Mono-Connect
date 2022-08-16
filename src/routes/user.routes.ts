import {Router} from 'express';

const router = Router();

import mono from '../controllers/user.controller'
import auth from "../middlewares/verifyToken"

router.patch('/exchange-token', auth.validateUser, mono.exchangeToken);



export default router;
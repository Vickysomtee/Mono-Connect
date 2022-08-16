import * as express from "express"
import {JwtPayload} from 'jsonwebtoken'
declare global {
    namespace Express {
        interface Request {
            user? : Record<string>
            token? : Record<string>
        }
    }
}

declare module 'api';
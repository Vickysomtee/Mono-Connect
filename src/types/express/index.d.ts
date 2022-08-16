import * as express from "express"
import { JwtPayload } from 'jsonwebtoken'
declare global {
    namespace Express {
        interface Request {
            user?: Record<string>
            token?: Record<string>
        }
    }
}

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DB_PORT: number;
        DB_USER: string;
        MONGO_URI: string;
        JWT_SECRET: string,
        MONO_SEC_KEY: string,
        ENV: 'test' | 'dev' | 'prod';
      }
    }
  }
declare module 'api';

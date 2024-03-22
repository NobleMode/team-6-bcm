import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Session } from 'express-session';
@Injectable()
export class AuthService implements PassportSerializer {
    getPassportInstance() {
        throw new Error('Method not implemented.');
    }
    serializeUser(user: any, done: (err: any, sessionObj: any) => void): any {
        done(null, user);
    }
    deserializeUser(
        sessionObj: any,
        done: (err: any, user?: any) => void,
    ): any {
        done(null, sessionObj);
    }
  
    logout(req: any): void { 
        req.logout(); 
    }
}
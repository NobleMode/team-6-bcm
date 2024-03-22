import { Module } from '@nestjs/common';
import { AuthService } from './logout.service';
import { AuthController } from './logout.controller';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer'; 
import { SessionModule } from 'nestjs-session';

@Module({
    imports: [
        PassportModule,
        SessionModule.forRoot({
            session: { secret: 'your-secret-key' },
        }),
    ],
    providers: [AuthService, SessionSerializer], 
    controllers: [AuthController], 
})
export class AuthModule { }
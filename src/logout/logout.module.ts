import { Module } from '@nestjs/common';
import { LogoutService } from './logout.service';
import { LogoutController } from './logout.controller';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from 'src/auth/session.serializer'; 
import { SessionModule } from 'nestjs-session';

@Module({
    imports: [
        PassportModule,
        SessionModule.forRoot({
            session: { secret: 'your-secret-key' },
        }),
    ],
    providers: [LogoutService, SessionSerializer], 
    controllers: [LogoutController], 
})
export class LogoutModule { }
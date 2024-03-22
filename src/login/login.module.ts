import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LocalStrategy } from '../auth/local.strategy';

@Module({
  controllers: [LoginController],
  providers: [LoginService, LocalStrategy],
})
export class LoginModule {}

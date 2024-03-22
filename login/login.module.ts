import { Module } from '@nestjs/common';
import { LoginController } from 'src/login/login.controller';
import { LoginService } from 'src/login/login.service';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
  controllers: [LoginController],
  providers: [LoginService, LocalStrategy],
})
export class LoginModule {}

import { Body, Controller, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { RegisterUserDto } from 'src/dto/register-user.dto';
import { User } from 'src/entities/user.entity';
import { LogInUserDto } from 'src/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(ValidationPipe)
  login(@Body() loginUserDto:LogInUserDto, @Res() res:Response):Promise<any> {
    console.log('login api');
    console.log(loginUserDto);
    return this.authService.login(loginUserDto);
  }
  @UseGuards(AuthGuard('local'))
  signin(@Req() req:Request) {
    const user=req.user;
    console.log('user', user);
    return 'sign in successfully!';
  }

  @Post('register')
  register(@Body() registerUserDto:RegisterUserDto, @Res() res:Response):Promise<User> {
    console.log('register api');
    console.log(registerUserDto)
    return this.authService.register(registerUserDto);
  }
  @Post('refresh_token')
  refreshToken(@Body() {refresh_token}):Promise<any>{
    console.log('refresh token api')
    return this.authService.refreshToken(refresh_token);
  }
}

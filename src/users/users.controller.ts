import { Controller, Get, Render, Post, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('login')
  @Render('login')
  login() {
    return;
  }

  @Post('login')
  async authenticate(@Req() request: Request,  @Res() res: Response) {
    const user = await this.usersService.findOne(request.body.username);
    if (user && user.password === request.body.password) {
       // Authentication successful
      // TODO: Start a session, issue a token, etc.

      console.log('Login successful');
    } else {
      // Authentication failed
      // TODO: Handle failed authentication

      console.log('Login failed');
    }
  }
}
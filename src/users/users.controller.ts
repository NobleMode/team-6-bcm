import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';

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
    return;
  }
}

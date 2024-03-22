import {
  Request,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('login')
  root() {
    return {
      test: [
        { name: 'a', age: 10 },
        { name: 'bn', age: 20 },
      ],
    };
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}

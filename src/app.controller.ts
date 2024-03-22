import { Request, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   @Get()
   getHello(): string {
     return this.appService.getHello();
   }

   @UseGuards(LocalAuthGuard)
   @Post('auth/login')
   async login(@Request() req) {
    return req.user
   }

  @Get()
  redirectToLogin(@Res() res: Response) {
    res.redirect('/login');
  }
}

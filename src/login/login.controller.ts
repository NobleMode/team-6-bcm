import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get()
  @Render('login')
  login() {
    return {};
  }

  @Post()
  handleLogin(@Body() body: any): void {
    console.log(body);
  }
}

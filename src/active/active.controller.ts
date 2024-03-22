import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { UserService } from './active.service';
import { EventActive } from 'src/entities/eventActive.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  @Render('active')
  getActive() {
    return {};
  }
}

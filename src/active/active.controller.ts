import { Controller,Get,UseGuards } from '@nestjs/common';
import { UserService } from './active.service';
import { EventActive } from 'src/entities/eventActive.entity';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    
    @UseGuards(AuthGuard)
    @Get()
    findAll():Promise<EventActive[]> {
        return this.userService.findAll();
    }}
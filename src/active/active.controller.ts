import { Controller,Get,Render,UseGuards } from '@nestjs/common';
import { UserService } from './active.service';
import { EventActive } from 'src/entities/eventActive.entity';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    
    @UseGuards(AuthGuard)
    @Get()
    @Render('active/active')
    root() {
        return this.userService
                    .findAll()
                    .then((result) => result ? {active: result} : {active: []} );
    }}
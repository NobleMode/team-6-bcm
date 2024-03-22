import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from 'src/entities/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UserService){}
    
    @UseGuards(AuthGuard)
    @Get()
    findAll():Promise<User[]> {
        return this.userService.findAll();
    }
    
    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Param('id') id:string):Promise<User> {
        return this.userService.findOne(Number(id));
    }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() createUserDto: CreateUserDto):Promise<User>{
        return this.userService.create(createUserDto);    
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    update(@Param(':id') id:string, @Body() updateUserDto:UpdateUserDto){
        return this.userService.update(Number(id),updateUserDto);
    }
    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(@Param(':id') id:string){
        return this.userService.delete(Number(id));
    }
}

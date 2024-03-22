import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import * as bscrypt from 'bcrypt';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>){}
    async findAll():Promise<User[]> {
        return await this.userRepository.find({
            select:['id','email','created_at','update_up']
        })
    }

    async findOne(id:number): Promise<User> {
        return await this.userRepository.findOneBy({id});
    }

    async create(createUserDto: CreateUserDto): Promise<User>{
        const hashPassword = await bscrypt.hash(createUserDto.password,10);
        return await this.userRepository.save(createUserDto);
    }

    async update(id:number, updateUserDto:UpdateUserDto):Promise<UpdateResult>{
        return await this.userRepository.update(id,updateUserDto);
    }

    async delete(id:number):Promise<DeleteResult> {
        return this.userRepository.delete(id);
    }
}

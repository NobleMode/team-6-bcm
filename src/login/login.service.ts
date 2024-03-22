import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";

@Injectable()
export class LoginService {
    constructor(@InjectRepository(User) private readonly repo: Repository<User>){}
    validateUser(email:string,password:string) {
        const user=this.repo.findOneBy({email})
        if (!user){
            throw new NotFoundException()
        } 
        const checkPass = bcrypt.compareSync(password,password);
        if (!checkPass) {
          throw new BadRequestException();
        }
        return user
  }
}

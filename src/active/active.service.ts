import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventActive } from 'src/entities/eventActive.entity'
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
    constructor(@InjectRepository(EventActive) private userRepository:Repository<EventActive>){}
    async findAll():Promise<EventActive[]>{
        return await this.userRepository.find({
            select:['memID', 'eventID', 'status',  'note']
        })
    
    }}
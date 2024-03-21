import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(Role) private readonly repo: Repository<Role>
    ){}

    async getAllRole(): Promise<Role[]> {
        return await this.repo.find();
    }
}

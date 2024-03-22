import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from '../entities/member.entity';


@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(MemberEntity)
        private readonly yourRepository: Repository<MemberEntity>,
    ) {}

    async search(query: string): Promise<MemberEntity[]> {
        const results = await this.yourRepository.find();
        return results;
    }
}

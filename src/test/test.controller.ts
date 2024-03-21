import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { Role } from 'src/entities/role.entity';

@Controller('test')
export class TestController {
    constructor(
        private readonly testService: TestService
    ){}

    @Get()
    getAllRole(): Promise<Role[]> {
        return this.testService.getAllRole();
    }
}

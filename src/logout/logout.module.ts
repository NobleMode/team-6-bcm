import { Module } from '@nestjs/common';
import { AuthController } from './logout.controller';
import { AuthService } from './logout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventActive } from 'src/entities/eventActive.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class UserModule {}

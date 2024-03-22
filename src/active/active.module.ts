import { Module } from '@nestjs/common';
import { UserController } from './active.controller';
import { UserService } from './active.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventActive } from 'src/entities/eventActive.entity';
import { ConfigModule } from '@nestjs/config';@Module({
  imports: [TypeOrmModule.forFeature([EventActive]),
  ConfigModule
],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

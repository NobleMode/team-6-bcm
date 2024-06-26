import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberService } from './member.service';
import { MemberEntity } from 'src/entities/member.entity';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';

@Controller('members')
export class MemberController {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberService: MemberService) {}
  @UseGuards(AuthenticatedGuard)  
  @Get()
  @Render('info')
   findAll(): Promise<MemberEntity[]> {
    return this.memberService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<MemberEntity> {
    return this.memberService.findOne(id);
  }

  @Post()
  async create(@Body() member: MemberEntity): Promise<MemberEntity> {
    return this.memberService.create(member);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() member: MemberEntity): Promise<MemberEntity> {
    return this.memberService.update(id, member);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.memberService.remove(id);
  }
}
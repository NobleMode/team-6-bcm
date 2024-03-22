import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import { Project } from './project.entity';
import { Status } from './status.entity';
import { MemberEntity } from './member.entity';

@Entity()
export class ProjStat {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Project, (proj) => proj.projectID)
    project: string;

    @ManyToOne(() => MemberEntity, (mem) => mem.rollno)
    head: string;

    @ManyToOne(() => Status, (stat) => stat.statusID)
    status: number;
}
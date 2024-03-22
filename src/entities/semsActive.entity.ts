import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Semester } from './semester.entity';
import { Status } from './status.entity';
import { MemberEntity } from './member.entity';

@Entity()
export class SemsActive {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => MemberEntity, (mem) => mem.rollno)
    member: string;

    @ManyToOne(() => Semester, (sems) => sems.semsID)
    semester: string;

    @ManyToOne(() => Status, (stat) => stat.statusID)
    status: number;

    @Column()
    note: string;
}
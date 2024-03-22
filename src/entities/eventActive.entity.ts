import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Status } from './status.entity';
import { MemberEntity } from './member.entity';
import { Event } from './event.entity';

@Entity()
export class EventActive {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => MemberEntity, (mem) => mem.rollno)
    memID: string;

    @ManyToOne(() => Event, (event) => event.eventID)
    eventID: string;

    @ManyToOne(() => Status, (stat) => stat.statusID)
    status: string;

    @Column()
    note: string;
} 
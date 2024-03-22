import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { MemberEntity } from './member.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => MemberEntity, (mem) => mem.rollno)
    user: string;

    @OneToOne(() => MemberEntity, (mem) => mem.email)
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    refresh_token: string;

    @CreateDateColumn()
    created_at: Date;
  
    @CreateDateColumn()
    update_up: Date;
}
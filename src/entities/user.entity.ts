import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Member } from './member.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Member, (mem) => mem.rollno)
    user: string;

    @OneToOne(() => Member, (mem) => mem.email)
    mail: string;

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
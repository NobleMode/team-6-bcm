import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MemberEntity } from "./member.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    roleID: string;

    @Column()
    name: string

    @OneToMany(() => MemberEntity, (mem) => mem.role)
    memberRole: string[];
}
import { access } from "fs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn({name:'id_user'})
    id:number

    @Column({name:'email'})
    email:string

    @Column({name:'password'})
    password:string

    @Column({name:'token'})
    token:string

}

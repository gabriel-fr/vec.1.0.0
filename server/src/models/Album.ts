import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from './User';

@Entity()
export class Album {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    img1: string;

    @Column()
    img2: string;

    @Column()
    img3: string;

    @Column()
    img4: string;

    @Column()
    img5: string;

    @Column()
    datetime: string;

    @ManyToOne(() => User, user => user.albuns)
    user: User;

}
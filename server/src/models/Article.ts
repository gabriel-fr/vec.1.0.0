import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    subtitle: string;

    @Column()
    img1: string;

    @Column()
    title2: string;

    @Column()
    subtitle2: string;

    @Column()
    img2: string;

    @Column()
    datetime: string;

    @Column()
    signature: string;

    @ManyToOne(() => User, user => user.articles)
    user: User;

}
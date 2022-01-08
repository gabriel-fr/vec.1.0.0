import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Content } from "./Content";

@Entity()
export class Global {

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

    @ManyToOne(() => Content, content => content.globals)
    content: Content;

}
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Footer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  link1: string;

  @Column()
  link2: string;

  @Column()
  link3: string;

  @Column()
  link4: string;

}
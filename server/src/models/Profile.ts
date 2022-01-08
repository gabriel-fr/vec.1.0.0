import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Profile {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subtext: string;

  @Column()
  image: string;

  @Column()
  bibles: string;

}
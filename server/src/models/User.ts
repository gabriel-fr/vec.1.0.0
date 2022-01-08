import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Profile } from './Profile';
import { Article } from './Article';
import { Album } from "./Album";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  email: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Article, article => article.user)
  articles: Article[];

  @OneToMany(() => Album, album => album.user)
  albuns: Album[];

}
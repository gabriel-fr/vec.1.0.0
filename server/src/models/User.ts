import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Profile } from './Profile';
import { Album } from "./Album";
import { Article } from './Article';

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

  @OneToMany(() => Album, album => album.user)
  albuns: Album[];

  @OneToMany(() => Article, article => article.user)
  articles: Article[];

}
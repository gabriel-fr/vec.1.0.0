import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Footer } from './Footer';
import { Global } from './Global';

@Entity()
export class Content {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emphasis: string;

  @OneToOne(() => Footer)
  @JoinColumn()
  footer: Footer;

  @OneToMany(() => Global, global => global.content)
  globals: Global[];

}
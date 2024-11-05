import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Publication } from './publication.entity';

@Entity()
export class Projet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.projets)
  user: User;

  @OneToMany(() => Publication, (publication) => publication.projet)
  publications: Publication[];
}

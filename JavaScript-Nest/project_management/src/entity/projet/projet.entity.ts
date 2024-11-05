import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Publication } from '../publication/publication.entity';
import { User } from '../user/user.entity';

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

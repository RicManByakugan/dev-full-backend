import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Projet } from './projet.entity';
import { Publication } from './publication.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Projet, (projet) => projet.user)
  projets: Projet[];

  @OneToMany(() => Publication, (publication) => publication.user)
  publications: Publication[];
}

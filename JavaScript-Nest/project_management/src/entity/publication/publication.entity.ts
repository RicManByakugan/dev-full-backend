import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Projet } from '../projet/projet.entity';
import { User } from './user.entity';

@Entity()
export class Publication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Projet, (projet) => projet.publications)
    projet: Projet;

    @ManyToOne(() => User, (user) => user.publications)
    user: User;
}
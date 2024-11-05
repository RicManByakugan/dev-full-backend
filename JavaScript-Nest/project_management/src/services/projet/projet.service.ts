import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Projet } from 'src/entity/projet/projet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjetService {

    constructor(
        @InjectRepository(Projet)
        private projet_repository: Repository<Projet>
    ){}

    async create(projet: Projet): Promise<Projet>{
        return this.projet_repository.save(projet);
    }

    async findAll(): Promise<Projet[]>{
        return this.projet_repository.find({relations: ['user', 'publications']});
    }

    async findOne(id: number): Promise<Projet>{
        return this.projet_repository.findOneBy({ id });
    }


}

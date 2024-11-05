import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Publication } from 'src/entity/publication/publication.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationService {

    constructor(
        @InjectRepository(Publication)
        private publicationRepository: Repository<Publication>,
    ){}

    async create(publication: Publication): Promise<Publication>{
        return this.publicationRepository.save(publication);
    }

    async findAll(): Promise<Publication[]>{
        return this.publicationRepository.find();
    }
}

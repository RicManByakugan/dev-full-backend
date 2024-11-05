import { Body, Controller, Get, Post } from '@nestjs/common';
import { Publication } from 'src/entity/publication/publication.entity';
import { PublicationService } from 'src/services/publication/publication.service';

@Controller('publication')
export class PublicationController {

    constructor(private publicationService: PublicationService){}

    @Get()
    findAll(): Promise<Publication[]>{
        return this.publicationService.findAll();
    }

    @Post()
    create(@Body() publication: Publication): Promise<Publication>{
        return this.publicationService.create(publication);
    }

}

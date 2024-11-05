import { Body, Controller, Get, Post } from '@nestjs/common';
import { Projet } from 'src/entity/projet/projet.entity';
import { ProjetService } from 'src/services/projet/projet.service';

@Controller('projet')
export class ProjetController {

    constructor(private projetService: ProjetService){}

    @Get()
    findAll(): Promise<Projet[]>{
        return this.projetService.findAll();
    }

    @Post()
    create(@Body() projet: Projet): Promise<Projet>{
        return this.projetService.create(projet);
    }
}

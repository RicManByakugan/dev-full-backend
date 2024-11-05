import { Module } from '@nestjs/common';
import { ProjetController } from 'src/controller/projet/projet.controller';
import { ProjetService } from 'src/services/projet/projet.service';

@Module({
    controllers: [ProjetController],
    providers: [ProjetService]
})
export class ProjetModule {}

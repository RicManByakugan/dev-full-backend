import { Module } from '@nestjs/common';
import { PublicationController } from 'src/controller/publication/publication.controller';
import { PublicationService } from 'src/services/publication/publication.service';

@Module({
    controllers: [PublicationController],
    providers: [PublicationService]
})
export class PublicationModule {}

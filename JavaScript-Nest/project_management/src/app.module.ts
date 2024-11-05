import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Projet } from './entity/projet.entity';
import { Publication } from './entity/publication.entity';
import { UserService } from './services/user/user.service';
import { PublicationService } from './services/publication/publication.service';
import { ProjetService } from './services/projet/projet.service';
import { UserService } from './controller/user/user.service';
import { PublicationService } from './controller/publication/publication.service';
import { ProjetService } from './controller/projet/projet.service';
import { ProjetController } from './controller/projet/projet.controller';
import { UserModule } from './module/user/user.module';
import { PublicationModule } from './module/publication/publication.module';
import { ProjetModule } from './module/projet/projet.module';
import { UserController } from './controller/user/user.controller';
import { PublicationController } from './controller/publication/publication.controller';
import { ProjetController } from './controller/projet/projet.controller';

@Module({
  imports: [
    // FOR ENV
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Projet, Publication],
      synchronize: true,
    }),
    ProjetModule,
    PublicationModule,
    UserModule,
  ],
  controllers: [AppController, ProjetController, UserController, PublicationController],
  providers: [AppService, UserService, PublicationService, ProjetService],
})
export class AppModule {}

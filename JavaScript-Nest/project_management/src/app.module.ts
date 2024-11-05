import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projet } from './entity/projet/projet.entity';
import { Publication } from './entity/publication/publication.entity';
import { UserModule } from './module/user/user.module';
import { PublicationModule } from './module/publication/publication.module';
import { User } from './entity/user/user.entity';
import { ProjetModule } from './module/projet/projet.module';

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
})
export class AppModule {}

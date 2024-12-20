import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

import { DurationInterceptor } from './interceptors/duration/duration.interceptor';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:3000'],
    optionsSuccessStatus: 200,
  }
  app.enableCors(corsOptions);

  // USE MIDDLEWARE
  app.use((req, res, next) => {
    console.log(`Request... with ${req.ip}`);
    next();
  });

  app.use(morgan('dev'));

  // app.useGlobalInterceptors(new DurationInterceptor());

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(configService.get('APP_PORT'));
  // await app.listen(process.env.APP_PORT);
}
bootstrap();

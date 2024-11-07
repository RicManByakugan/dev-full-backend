import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CvEntity])],
  controllers: [CvController],
  providers: [CvService]
})
export class CvModule {}

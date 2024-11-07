import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { AddCvDTO } from './dto/cv.dto';
import { UpdateCvDTO } from './dto/update.cv.dto';

@Controller('cv')
export class CvController {

    constructor(
        private cvService: CvService
    ){}

    @Get()
    async getAllCv(): Promise<CvEntity[]>{
        return await this.cvService.findAll();
    }

    @Post()
    async createCv(@Body() cv: AddCvDTO): Promise<CvEntity>{
        return await this.cvService.create(cv);
    }

    @Patch(':id')
    async updateCv(
        @Body() cv: UpdateCvDTO, 
        @Param('id', ParseIntPipe) id: number
    ): Promise<CvEntity>{
        return await this.cvService.update(id, cv);
    }

    @Patch()
    async updateCv2(
        @Body() updateObject, 
    ){
        const { updateCriteria, updateCvDto } = updateObject;
        return this.cvService.updateCv2(updateCriteria, updateCvDto);
    }



}

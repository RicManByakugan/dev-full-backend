import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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

    @Get('recover/:id')
    async recoverCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.restoreCv(id);
    }

    @Get(':id')
    async getOneCv(@Param('id', ParseIntPipe) id: number): Promise<CvEntity>{
        return await this.cvService.findOne(id);
    }

    @Post()
    async createCv(@Body() cv: AddCvDTO): Promise<CvEntity>{
        return await this.cvService.create(cv);
    }

    @Patch(':id')
    async updateCv(
        @Param('id', ParseIntPipe) id: number,
        @Body() cv: UpdateCvDTO
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


    @Delete('removecv/:id')
    async deleteCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.removeCv(id);
    }

    @Delete('/softdelete/:id')
    async softDeleteCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.softRemoveCv(id);
    }


}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CvService } from './cv.service';
import { User } from "../user/decorator/user.decorator"
import { CvEntity } from './entities/cv.entity/cv.entity';
import { UserEntity } from '../user/entities/user.entity/user.entity';
import { AddCvDTO } from './dto/cv.dto';
import { UpdateCvDTO } from './dto/update.cv.dto';
import { JwtGuard } from 'src/user/guard/jwt.guard';
import { Request } from 'express';

@Controller('cv')
export class CvController {

    constructor(
        private cvService: CvService
    ){}

    @UseGuards(JwtGuard)
    @Get()
    async getAllCv(
        @User() user: UserEntity
    ): Promise<CvEntity[]>{
        return await this.cvService.findAll(user);
    }

    @UseGuards(JwtGuard)
    @Get('recover/:id')
    async recoverCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.restoreCv(id);
    }

    @Get('stat')
    async getStat(){
        return await this.cvService.statCvNombreByAge();
    }

    @UseGuards(JwtGuard)
    @Post()
    async createCv(
        @Body() cv: AddCvDTO,
        @Req() request: Request
    ): Promise<CvEntity>{
        const user = request.user
        return await this.cvService.create(cv, user);
    }

    @UseGuards(JwtGuard)
    @Patch(':id')
    async updateCv(
        @Param('id', ParseIntPipe) id: number,
        @Body() cv: UpdateCvDTO
    ): Promise<CvEntity>{
        return await this.cvService.update(id, cv);
    }

    @UseGuards(JwtGuard)
    @Patch()
    async updateCv2(
        @Body() updateObject, 
    ){
        const { updateCriteria, updateCvDto } = updateObject;
        return this.cvService.updateCv2(updateCriteria, updateCvDto);
    }


    @UseGuards(JwtGuard)
    @Delete('removecv/:id')
    async deleteCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.removeCv(id);
    }
    @UseGuards(JwtGuard)
    @Delete('/softdelete/:id')
    async softDeleteCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.softRemoveCv(id);
    }

    @Get(':id')
    async getOneCv(@Param('id', ParseIntPipe) id: number): Promise<CvEntity>{
        return await this.cvService.findOne(id);
    }

}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CvService } from './cv.service';
import { User } from "../user/decorator/user.decorator"
import { CvEntity } from './entities/cv.entity/cv.entity';
import { UserEntity } from '../user/entities/user.entity/user.entity';
import { AddCvDTO } from './dto/cv.dto';
import { UpdateCvDTO } from './dto/update.cv.dto';
import { JwtAuthGuard } from 'src/user/guard/jwt.auth.guard';
import { Request } from 'express';

@Controller('cv')
export class CvController {

    constructor(
        private cvService: CvService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllCv(
        @User() user: UserEntity
    ): Promise<CvEntity[]>{
        return await this.cvService.findAll(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('recover/:id')
    async recoverCv(
        @Param('id', ParseIntPipe) id: number,
        @User() user: UserEntity
    ){
        return await this.cvService.restoreCv(id, user);
    }

    @Get('stat')
    async getStat(){
        return await this.cvService.statCvNombreByAge();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createCv(
        @Body() cv: AddCvDTO,
        @Req() request: Request
    ): Promise<CvEntity>{
        const user = request.user
        return await this.cvService.create(cv, user);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateCv(
        @Param('id', ParseIntPipe) id: number,
        @Body() cv: UpdateCvDTO
    ): Promise<CvEntity>{
        return await this.cvService.update(id, cv);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    async updateCv2(
        @Body() updateObject, 
    ){
        const { updateCriteria, updateCvDto } = updateObject;
        return this.cvService.updateCv2(updateCriteria, updateCvDto);
    }


    @UseGuards(JwtAuthGuard)
    @Delete('removecv/:id')
    async deleteCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.removeCv(id);
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/softdelete/:id')
    async softDeleteCv(@Param('id', ParseIntPipe) id: number){
        return await this.cvService.softRemoveCv(id);
    }

    @Get(':id')
    async getOneCv(@Param('id', ParseIntPipe) id: number): Promise<CvEntity>{
        return await this.cvService.findOne(id);
    }

}

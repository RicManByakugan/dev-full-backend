import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCvDTO } from './dto/cv.dto';
import { UpdateCvDTO } from './dto/update.cv.dto';

@Injectable()
export class CvService {
    constructor(
        @InjectRepository(CvEntity)
        private cvRepository: Repository<CvEntity>
    ){}

    async findAll(): Promise<CvEntity[]>{
        return await this.cvRepository.find();
    }

    async findOne(id: number): Promise<CvEntity>{
        const cv = await this.cvRepository.findOne({ where: { id } });
        if(cv) return cv;
        throw new NotFoundException(`Le cv d'id ${id} n'existe pas`);
    }

    async create(cvdto: AddCvDTO): Promise<CvEntity>{
        let cv = new CvEntity();
        cv = { ...cv, ...cvdto };
        return await this.cvRepository.save(cv);
    }

    async update(id: number, cv: UpdateCvDTO): Promise<CvEntity>{
        // On récupère le cv d'id et on remplace les valeurs
        // par les nouvelles valeurs
        const cvExist = await this.cvRepository.preload({ 
            id, 
            ...cv
        });
        // tester si le cv existe
        if(!cvExist){
            throw new NotFoundException(`Le cv d'id ${id} n'existe pas`);
        }
        // On sauvegarde les nouvelles valeurs
        return await this.cvRepository.save(cvExist);
    }

    async updateCv2(updatecriteria, cv: UpdateCvDTO): Promise<any>{
        return await this.cvRepository.update(updatecriteria, cv);
    }
    

    // DELETE BY ID
    async delete(id: number): Promise<void>{
        await this.cvRepository.delete(id);
        // await this.cvRepository.delete([4, 2]);
    }

    // REMOVE ENTITY CV
    async removeCv(id: number){
        const cvRemove = await this.cvRepository.findOne({ where: { id } });
        if(!cvRemove){
            throw new NotFoundException(`Le cv d'id ${id} n'existe pas`);
        }
        return await this.cvRepository.remove(cvRemove);
    }

    // REMOVE WITH CRIETERIA
    async removeCvWithCretiria(criteria){
        return await this.cvRepository.delete(criteria);
    }

    // SOFT REMOVE CV
    async softRemoveCv(id: number){
        // const cvRemove = await this.cvRepository.findOne({ where: { id } });
        // if(!cvRemove){
        //     throw new NotFoundException(`Le cv d'id ${id} n'existe pas`);
        // }
        const cv = await this.findCvAsyncById(id);
        return await this.cvRepository.softDelete(id);
        // return await this.cvRepository.softRemove(cv);
    }

    // RESTORE CV
    async restoreCv(id: number){
        // const cvRestore = await this.cvRepository.query(`SELECT * FROM cv WHERE id = ${id}`);
        // if(!cvRestore){
        //     throw new NotFoundException(`Le cv d'id ${id} n'existe pas`);
        // }
        return await this.cvRepository.restore(id);
    }

    // FIND ASYNC BY ID
    async findCvAsyncById(id: number){
        const cv = await this.cvRepository.findOne({ where: { id } });
        if(!cv){
            throw new NotFoundException(`Le cv d'id ${id} n'existe pas`);
        }
        return cv;
    }

    // NOMBRE DE CV PAR AGE
    // async getNombreCvByAge(age: number){
    //     return await this.cvRepository.count({ where: { age } });
    // }
    async statCvNombreByAge(){
        // Create Query Builder
        const qb = this.cvRepository.createQueryBuilder('cv');
        // await qb.select('cv.age as age, count(cv.age) as nombre')
        //     .groupBy('cv.age')
        //     .orderBy('cv.age', 'ASC');
        //     console.log(qb.getSql());
        //     return  qb.getRawMany();
        await qb.select('cv.age as age, count(cv.age) as nombre')
            // .where('cv.age > :age', { age: 18 })
            .where('cv.age > :age')
            .setParameters({age: 18})
            .groupBy('cv.age')
            .orderBy('cv.age', 'ASC');
            console.log(qb.getSql());
            return  qb.getRawMany();
    }


}

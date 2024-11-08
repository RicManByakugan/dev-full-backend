import { Injectable } from '@nestjs/common';
import { UserSubscribeDto } from './dto/user.subscribe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}

    async subscribe(userDto: UserSubscribeDto): Promise<Partial<UserEntity>> {
        const user = this.userRepository.create({
            ...userDto
        });
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            await this.userRepository.save(user);
        } catch (error) {
            console.log('Erreur lors de l\'enregistrement de l\'utilisateur');
            // throw new ConflictException('Erreur lors de l\'enregistrement de l\'utilisateur');
        }
        // SEND EMAIL
        delete user.password;
        delete user.salt;
        return user;
    }
}

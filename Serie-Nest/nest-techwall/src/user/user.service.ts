import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserSubscribeDto } from './dto/user.subscribe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity/user.entity';
import { UserCredentialDto } from './dto/user.credential.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ) { }

    async subscribe(userDto: UserSubscribeDto): Promise<Partial<UserEntity>> {
        const user = this.userRepository.create({
            ...userDto
        });
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            await this.userRepository.save(user);
        } catch (error) {
            // console.log('Erreur lors de l\'enregistrement de l\'utilisateur');
            throw new ConflictException('Erreur lors de l\'enregistrement de l\'utilisateur');
        }
        // SEND EMAIL
        delete user.password;
        delete user.salt;
        return user;
    }

    async login(credential: UserCredentialDto): Promise<Partial<any>> {
        const { username, password } = credential;

        const user = await this.userRepository.createQueryBuilder("user")
            .where("user.username = :username OR user.email = :username", { username })
            .getOne();
        console.log(user);
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        const hashPassword = await bcrypt.hash(password, user.salt);
        if (hashPassword === user.password) {
            const payload =  {
                username: user.username,
                id: user.id
            }
            const token = await this.jwtService.sign(payload);
            return {
                token: token,
                username,
                role: user.role,
                email: user.email
            };
        }else{
            throw new UnauthorizedException("Invalid credentials");
        }
    }
}

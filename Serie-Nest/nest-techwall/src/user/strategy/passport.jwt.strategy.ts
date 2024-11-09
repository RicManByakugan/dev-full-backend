import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import * as dotenv from 'dotenv';
import { PayloadInterface } from "../interface/payload.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity/user.entity";

dotenv.config();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET,
        });
    }

    async validate(payload: PayloadInterface) {
        const user = await this.userRepository.findOne({ where: { id: payload.id } });
        if (user) {
            // const { salt, password, ...result } = user;
            delete user.salt;
            delete user.password;
            return user;
        }else{
            throw new UnauthorizedException('Invalid credentials');
        }    
    }
}
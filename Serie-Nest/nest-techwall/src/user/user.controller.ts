import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Post, Body } from '@nestjs/common';
import { UserSubscribeDto } from './dto/user.subscribe.dto';
import { UserEntity } from './entities/user.entity/user.entity';
import { UserCredentialDto } from './dto/user.credential.dto';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Post('subscribe')
    async register(@Body() userDto: UserSubscribeDto): Promise<Partial<UserEntity>> {
        return await this.userService.subscribe(userDto);
    }

    @Post('login')
    async login(@Body() credential: UserCredentialDto): Promise<Partial<UserEntity>> {
        return await this.userService.login(credential);
    }

}

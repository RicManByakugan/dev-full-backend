import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/entity/user/user.entity';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Post()
    create(@Body() user: User): Promise<User>{
        return this.userService.create(user);
    }
}

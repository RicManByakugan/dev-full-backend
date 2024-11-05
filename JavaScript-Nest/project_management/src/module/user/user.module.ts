import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user/user.controller';
import { UserService } from 'src/services/user/user.service';

@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { GreeterService } from './service/greeter.service';
import { GreeterController } from './controller/greeter.controller';

@Module({
    controllers: [GreeterController],
    providers: [GreeterService]
})
export class GreeterModule {}

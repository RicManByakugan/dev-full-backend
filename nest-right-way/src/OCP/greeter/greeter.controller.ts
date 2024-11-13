import { Controller, Get } from '@nestjs/common';
import { GreeterService } from './greeter.service';
import { GreetingCourant } from '../greeting.type/greeting.courant';

@Controller('greeter')
export class GreeterController {

    constructor(
        private greeterService: GreeterService
    ){}

    @Get()
    sayGreeter(){
        return this.greeterService.greetingOCP(new GreetingCourant());
    }

}

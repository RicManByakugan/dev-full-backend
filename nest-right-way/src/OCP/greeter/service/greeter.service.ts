import { Injectable } from '@nestjs/common';
import { Greeting } from '../../interface/greet.interface';

@Injectable()
export class GreeterService {

    // BAD CODE
    // greeting(type: string) {
    //     if (type === 'formal') {
    //         return 'Good day to you.';
    //     } else if (type === 'casual') {
    //         return 'Hey!';
    //     }
    // }


    // GOOD CODE
    greetingOCP(greeting: Greeting) {
        return greeting.greet()
    }

}

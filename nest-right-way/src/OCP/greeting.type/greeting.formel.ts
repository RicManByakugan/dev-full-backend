import { Greeting } from "../interface/greet.interface";

export class GreetingFormal implements Greeting{
    greet(): string {
        return "Good morning!";
    }
}
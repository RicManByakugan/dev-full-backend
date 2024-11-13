import { Greeting } from "../interface/greet.interface";

export class GreetingCourant implements Greeting{
    greet(): string {
        return "Salut Courant!";
    }
}
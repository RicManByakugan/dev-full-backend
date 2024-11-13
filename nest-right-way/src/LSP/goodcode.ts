import { FlyInterface } from "./interface/fly.interface";
import { NoFlyInterface } from "./interface/nofly.interface";

class Eagle implements FlyInterface{
    fly(): void {
        console.log("Eagle is flying");
    }
}

class Penguin implements NoFlyInterface{
    waddle(): void {
        console.log("Penguin is waddling");
    }
}
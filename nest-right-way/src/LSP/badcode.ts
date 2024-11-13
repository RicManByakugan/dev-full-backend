class Bird {
    fly(speed: number): string {
        return `Flying at ${speed} km/h`;
    }
}

class Eagle extends Bird {
    dive(): void {
        // ...
    }

    fly(speed: number): string {
        return `Soaring through the sky at ${speed} km/h`;
    }
}


// LSP Violation:
class Penguin extends Bird {
    fly(): never {
        throw new Error("Sorry, I can't fly");
    }
}
export interface Hero {
    id: number;
    name: string;
    force: number;
    alive: boolean;
    power: string;
}

export class Hero implements Hero {

    constructor(
        public id: number,
        public name: string,
        public force: number,
        public alive: boolean,
        public power: string,
    ) { }
}
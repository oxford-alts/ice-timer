import {Match} from './match';

export class Game {
    public matches:Match[];

    public timeRemaining:number;

    constructor(matches:Match[]) {
        this.matches = matches;
    }
}
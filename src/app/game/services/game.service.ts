import {Injectable} from '@angular/core';
import {Game} from '../classes/game';
import {Match} from '../classes/match';

@Injectable()
export class GameService {
    public pastGames:Game[];
    public futureGames:Game[];
    private _totalGames:number;

    private _totalTeams:number;
    public set totalTeams(teams:number) {
        this._totalTeams = teams;
    }
    public gameDuration:number;

    private _currentGame:Game;
    private _isPlaying:boolean;
    private _timeRemaining:number;
    private _gameInterval:any;

    public get previousGames() {
        return this._totalGames;
    }

    public get presentGames() {
        return [this._currentGame, ...this.futureGames];
    }

    public get currentGame() {
        return this._currentGame;
    }

    public get isPlaying() {
        return this._isPlaying;
    }

    public get timeRemaining() {
        return this._timeRemaining;
    }

    constructor() {
        this.pastGames = [];
        this.futureGames = [];
        this._totalGames = 0;

        this.gameDuration = 180;

        this._timeRemaining = this.gameDuration;
    }

    public generateGames() {
        this._currentGame = new Game([new Match(1, 2), new Match(3, 4), new Match(5, 6)]);
        this.futureGames = [new Game([new Match(7, 8), new Match(9, 10), new Match(11, 12)])];
    }

    public startCurrentGame() {
        this._isPlaying = true;
        this._timeRemaining = this.gameDuration;

        clearInterval(this._gameInterval);
        this._gameInterval = setInterval(() => {
            if (this._isPlaying) {
                this._timeRemaining -= 1;
            }
            if (this._timeRemaining == 0) {
                this.gameFinished();
            }
        }, 1000);
    }

    public skipCurrentGame() {
        this.gameFinished();
    }

    public pauseCurrentGame() {
        this._isPlaying = false;
    }

    private gameFinished() {
        clearInterval(this._gameInterval);

        if (this._timeRemaining != this.gameDuration) {
            this._totalGames += 1;
        }

        this._isPlaying = false;
        this._timeRemaining = this.gameDuration;

        this.pastGames.push(this._currentGame);
        this._currentGame = this.futureGames.shift();
    }
}
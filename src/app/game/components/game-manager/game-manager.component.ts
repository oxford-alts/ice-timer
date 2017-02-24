import {Component, Input} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../classes/game';

@Component({
    selector: 'timer-game-manager',
    templateUrl: './game-manager.component.html'
})
export class GameManagerComponent {
    public get game() {
        return this._gameService.currentGame;
    }

    public get previousGames() {
        return this._gameService.previousGames;
    }

    constructor(private _gameService:GameService) {}
}
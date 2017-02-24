import {Component, Input} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../classes/game';

@Component({
    selector: 'timer-game',
    templateUrl: './game.component.html'
})
export class GameComponent {
    @Input()
    public game:Game;

    public get isCurrent() {
        return this._gameService.currentGame == this.game;
    }

    constructor(private _gameService:GameService) {}
}
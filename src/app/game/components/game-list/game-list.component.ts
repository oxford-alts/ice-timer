import {Component, Input} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../classes/game';

@Component({
    selector: 'timer-game-list',
    templateUrl: './game-list.component.html'
})
export class GameListComponent {
    constructor(public gameService:GameService) {}
}
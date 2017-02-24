import {Component} from '@angular/core';
import {Game} from './game/classes/game';
import {Match} from './game/classes/match';
import {GameService} from './game/services/game.service';

@Component({
    selector: 'timer-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public gameService:GameService) {
        this.gameService.generateGames();
    }
}

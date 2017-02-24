import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchTeamsComponent} from './components/match-teams/match-teams.component';
import {GameManagerComponent} from './components/game-manager/game-manager.component';
import {GameService} from './services/game.service';
import {GameComponent} from './components/game/game.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {TimerPipe} from './pipes/timer.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MatchTeamsComponent,
        GameManagerComponent,
        GameComponent,
        GameListComponent,
        TimerPipe
    ],
    exports: [
        MatchTeamsComponent,
        GameManagerComponent,
        GameComponent,
        GameListComponent
    ],
    providers: [
        GameService
    ]
})
export class TimerGameModule {}
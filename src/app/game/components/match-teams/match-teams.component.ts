import {Component, Input} from '@angular/core';

@Component({
    selector: 'timer-match-teams',
    templateUrl: './match-teams.component.html'
})
export class MatchTeamsComponent {
    @Input()
    public firstTeam:number;

    @Input()
    public secondTeam:number;
}
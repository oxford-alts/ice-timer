import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'timer'
})
export class TimerPipe implements PipeTransform {
    transform(time:number):string {
        if (time == null) {
            return ``;
        }
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;
        return `${pad(minutes.toString(), 2)}:${pad(seconds.toString(), 2)}`
    }
}

function pad(str:string, max:number) {
  return str.length < max ? pad("0" + str, max) : str;
}
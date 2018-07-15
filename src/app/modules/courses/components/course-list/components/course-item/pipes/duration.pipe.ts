import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    if (duration < 60) {
      return `${duration} min`;
    } else {
      const min = duration % 60;
      const hours = (duration - min) / 60;
      return `${hours} h ${min} min`;
    } 
  }

}

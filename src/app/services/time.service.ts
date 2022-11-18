import { Injectable } from '@angular/core';
import { Hours, Minutes } from '../data/time.data';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  public GetHourArr(hour: number): string {
    let letter: string = "";

    for (let index = 1; index < Hours.length; index++) {
      if (hour === index) {
        letter = Hours[index - 1];  
      }
    }

    return letter;
  }

  public GetMinuteArr(minute: number): string {
    let letter: string = "";

    for (let index = 1; index < Minutes.length; index++) {
      if (minute === index) {
        letter = Minutes[index];  
      }
    }
    
    return letter;
  }

}
